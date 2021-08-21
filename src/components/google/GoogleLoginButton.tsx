import React from 'react';

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  buttonRef: React.LegacyRef<HTMLButtonElement>;
};

const GoogleLoginButton = ({
  children,
  className,
  buttonRef,
}: ComponentProps) => {
  return (
    <button
      ref={buttonRef}
      className={className || 'react-third-party-login-button__google'}
    >
      {children || <div className="g-signin2" data-onsuccess="onSignIn" />}
    </button>
  );
};

export default GoogleLoginButton;
