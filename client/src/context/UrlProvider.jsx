/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(result.data));
      setLoggedIn(true);
      navigate("/");
      toast.success("User Logged In Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);

  return (
    <UrlContext.Provider
      value={{
        user,
        setUser,
        email,
        password,
        setEmail,
        setPassword,
        loggedIn,
        setLoggedIn,
        handleSubmit,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;
