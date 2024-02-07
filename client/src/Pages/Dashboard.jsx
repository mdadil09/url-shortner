/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { UrlState } from "../context/UrlProvider";
import axios from "axios";
import { baseurl } from "../constants/constants";
import UpdateModal from "../components/updateModal";

const Dashboard = () => {
  const [urlData, setUrlData] = useState([]);
  const { user } = UrlState();

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
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
        setUrlData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <div className="dashboard-data">
          <h3>My URL</h3>
          <table className="link-table">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>URL</th>
                <th>Clicks</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {urlData.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {baseurl}
                    {link.shortId}
                  </td>
                  <td>{link.visitHistory.length}</td>
                  <td>
                    <button className="edit-btn" onClick={openModal}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button className="del-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <UpdateModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default Dashboard;
