import React from "react";

import KakaoLoginImage from "./images/kakao_login_btn.png";

type ComponentProps = {
  children?: React.ReactNode;
};

const KakaoLoginButton = ({ children }: ComponentProps) => {
  return (
    <button>
      {children || <img src={KakaoLoginImage} alt="kakao login" />}
    </button>
  );
};

export default KakaoLoginButton;
