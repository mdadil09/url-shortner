/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { UrlState } from "../context/UrlProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [url, setUrl] = useState();
  const [urlData, setUrlData] = useState([]);
  const { user } = UrlState();
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    try {
      const token = user.data.token;
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/urlShortner/",
        { url },
        config
      );
      fetchURL();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchURL = async () => {
    try {
      const token = user?.data?.token;
      if (user) {
        const result = await axios.get(
          "http://localhost:5700/api/urlShortner/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // const data = await result.json();
        setUrlData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const baseurl = "http://localhost:5700/";

  const copyLinkToClipboard = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>
          Empower Your Links, Unleash Your Impact –{" "}
          <span style={{ color: "tomato" }}>BoniUrl</span>,<br></br> Where Every
          Link Tells a Heroic Tale
        </h1>
        <p>
          Create short links, Link-in-bio pages. Share them anywhere.<br></br>{" "}
          Track what’s working, and what’s not.{" "}
        </p>
      </div>
      <div className="container">
        <div className="form-container">
          <div className="form">
            <h1>Shorten a long URL</h1>
            <div className="input-group">
              <div className="input-label">
                {" "}
                <label>Paste a long URL</label>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Example: https://super-long-link.com/jibrish"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="input-btn">
                <button className="btn" onClick={handleSubmit}>
                  {user ? "Get Your URL" : "Sign Up and get your URL"}
                </button>
              </div>
            </div>
          </div>
          <div className="view-url">
            <table className="link-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>URL</th>
                  <th>Copy</th>
                </tr>
              </thead>
              <tbody>
                {urlData.map((link, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>http://localhost:{link.shortId}</td>
                    <td>
                      <button
                        className="copy-btn"
                        onClick={() =>
                          copyLinkToClipboard(baseurl + link.shortId)
                        }
                      >
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
