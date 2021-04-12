import React from "react";

import NaverLoginImage from "./images/naver_login_btn.png";

import "../../styles/Button.scss";

type ComponentProps = {
  children?: React.ReactNode;
};

const NaverLoginButton = ({ children }: ComponentProps) => {
  return (
    <button className="react-third-party-login-button__naver">
      {children || <img src={NaverLoginImage} alt="naver login" />}
    </button>
  );
};

export default NaverLoginButton;
