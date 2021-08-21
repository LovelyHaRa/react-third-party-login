import React from 'react';

import KakaoLoginImage from './images/kakao_login_btn.png';

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
};

const KakaoLoginButton = ({
  children,
  className,
  handleClick,
}: ComponentProps) => {
  return (
    <button
      className={className || 'react-third-party-login-button__kakao'}
      onClick={handleClick}
    >
      {children || <img src={KakaoLoginImage} alt="kakao login" />}
    </button>
  );
};

export default KakaoLoginButton;
