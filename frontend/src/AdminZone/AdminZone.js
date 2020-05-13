import React, { useState, useEffect } from "react";

import LoginInput from "./LoginInput";
import PostInput from "./PostInput";
import LogOut from "./LogOut";
import Portfolio from "../Portfolio/Portfolio";

import "./adminZone.css";

const AdminZone = () => {
  const [login, setLogin] = useState(false);
  const [status, setStatus] = useState({ post: false, delete: false });
  const checkCookie = () => {
    if (document.cookie.includes("sessionId")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const checkStatus = (where) => {
    console.log(where);
    if (where === "deleteBtn") {
      setStatus({ delete: true });
    } else setStatus({ post: true });
  };

  useEffect(() => {
    checkCookie();
  }, [login]);

  return (
    <div className="adminZone">
      {login ? (
        <div className="post">
          <LogOut cookieTest={checkCookie} />
          <PostInput admin={login} checkStatus={checkStatus} />
          <Portfolio admin={login} status={status} checkStatus={checkStatus} />
        </div>
      ) : (
        <LoginInput cookieTest={checkCookie} />
      )}
    </div>
  );
};

export default AdminZone;
