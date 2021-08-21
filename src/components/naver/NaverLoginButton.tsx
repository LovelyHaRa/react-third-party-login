import React from 'react';

import NaverLoginImage from './images/naver_login_btn.png';

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
};

const NaverLoginButton = ({
  children,
  className,
  handleClick,
}: ComponentProps) => {
  return (
    <button
      className={className || 'react-third-party-login-button__naver'}
      onClick={handleClick}
    >
      {children || <img src={NaverLoginImage} alt="naver login" />}
    </button>
  );
};

export default NaverLoginButton;
