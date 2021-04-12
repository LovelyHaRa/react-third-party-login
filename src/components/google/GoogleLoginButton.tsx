import React from "react";

import "../../styles/Button.scss";

type ComponentProps = {
  children?: React.ReactNode;
};

const GoogleLoginButton = ({ children }: ComponentProps) => {
  return (
    <button className="react-third-party-login-button__google">
      {children}
    </button>
  );
};

export default GoogleLoginButton;
