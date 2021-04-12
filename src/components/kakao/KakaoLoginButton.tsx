import React from "react";

import KakaoLoginImage from "./images/kakao_login_btn.png";

import "../../styles/Button.scss";

type ComponentProps = {
  children?: React.ReactNode;
};

const KakaoLoginButton = ({ children }: ComponentProps) => {
  return (
    <button className="react-third-party-login-button__kakao">
      {children || <img src={KakaoLoginImage} alt="kakao login" />}
    </button>
  );
};

export default KakaoLoginButton;
