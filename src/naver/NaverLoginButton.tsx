import React from "react";

import NaverLoginImage from "./images/naver_login_btn.png";

type ComponentProps = {
  children?: React.ReactNode;
};

const NaverLoginButton = ({ children }: ComponentProps) => {
  return (
    <button>
      {children || <img src={NaverLoginImage} alt="naver login" />}
    </button>
  );
};

export default NaverLoginButton;
