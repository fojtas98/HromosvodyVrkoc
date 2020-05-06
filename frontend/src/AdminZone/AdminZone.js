import React, { useState, useEffect } from "react";

import LoginInput from "./LoginInput";
import PostInput from "./PostInput";
import LogOut from "./LogOut";
import Portfolio from "../Portfolio/Portfolio";

const AdminZone = () => {
  const [login, setLogin] = useState(false);
  const checkCookie = () => {
    if (document.cookie.includes("sessionId")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  useEffect(() => {
    console.log(login);
    if (document.cookie.includes("sessionId")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);

  return (
    <div className="adminZone">
      {login ? (
        <div className="post">
          <LogOut cookieTest={checkCookie} />
          <PostInput />
          <Portfolio admin={login} />
        </div>
      ) : (
        <LoginInput cookieTest={checkCookie} />
      )}
    </div>
  );
};

export default AdminZone;
