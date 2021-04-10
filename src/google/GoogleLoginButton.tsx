import React from "react";

type ComponentProps = {
  children?: React.ReactNode;
};

const GoogleLoginButton = ({ children }: ComponentProps) => {
  return <button>{children}</button>;
};

export default GoogleLoginButton;
