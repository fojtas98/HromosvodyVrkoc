import React, { useState, useEffect } from "react";

import LoginInput from "./LoginInput.js";
import PostInput from "./PostInput.js";
import LogOut from "./LogOut.js";
import Portfolio from "../Portfolio/Portfolio.js";

import "./adminZone.css";

const AdminZone = () => {
  const [login, setLogin] = useState(false);
  const [status, setStatus] = useState({
    post: false,
    delete: false,
    edit: false,
  });
  const [editing, setEditing] = useState(false);

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
    } else if (where === "postBtn") {
      setStatus({ post: true });
    } else if (where === "editBtn") {
      setStatus({ edit: true });
    }
  };

  useEffect(() => {
    checkCookie();
  }, [login]);

  const checkIfEditing = (editing) => {
    setEditing(editing);
  };

  return (
    <div className="content">
      <div className="adminZone">
        {login ? (
          <div className="post">
            <LogOut cookieTest={checkCookie} />
            <PostInput admin={login} checkStatus={checkStatus} />
            <Portfolio
              admin={login}
              status={status}
              checkStatus={checkStatus}
              checkIfEditing={checkIfEditing}
            />
          </div>
        ) : (
          <LoginInput cookieTest={checkCookie} />
        )}
      </div>
    </div>
  );
};

export default AdminZone;
