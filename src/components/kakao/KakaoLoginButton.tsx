import React from "react";

import KakaoLoginImage from "./images/kakao_login_btn.png";

import "../../styles/Button.scss";

type ComponentProps = {
  children?: React.ReactNode;
  handleClick: () => void;
};

const KakaoLoginButton = ({ children, handleClick }: ComponentProps) => {
  return (
    <button
      className="react-third-party-login-button__kakao"
      onClick={handleClick}
    >
      {children || <img src={KakaoLoginImage} alt="kakao login" />}
    </button>
  );
};

export default KakaoLoginButton;
