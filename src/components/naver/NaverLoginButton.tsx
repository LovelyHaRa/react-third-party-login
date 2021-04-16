import React from "react";

import NaverLoginImage from "./images/naver_login_btn.png";

import "../../styles/Button.scss";

type ComponentProps = {
  children?: React.ReactNode;
  handleClick: () => void;
};

const NaverLoginButton = ({ children, handleClick }: ComponentProps) => {
  return (
    <button
      className="react-third-party-login-button__naver"
      onClick={handleClick}
    >
      {children || <img src={NaverLoginImage} alt="naver login" />}
    </button>
  );
};

export default NaverLoginButton;
