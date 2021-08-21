import React, { useCallback, useEffect, useRef } from 'react';
import GoogleLoginButton from './GoogleLoginButton';

type Props = {
  /** client id를 지정할 떄 사용합니다(필수) */
  clientId: string;
  /** 로그인 쿠키를 생성할 도메인을 지정합니다 */
  cookiepolicy?: string;
  /** 로그인 유저의 정보를 가져올 범위를 정합니다 */
  scope?: string;
  /** 로그인 성공 시 callback function을 지정합니다 */
  onSuccessCallback: (googleUser: any) => void;
  /** children을 지정합니다, 지정하지 않으면 기본 버튼 스타일이 렌더링 됩니다  */
  children?: React.ReactNode;
  /** class name을 지정합니다 */
  className?: string;
};

/** Google Sign-In for Websites 버튼 */
const GoogleLoginButtonContainer = ({
  clientId,
  cookiepolicy = 'single_host_origin',
  scope = 'profile email',
  onSuccessCallback,
  children,
  className,
}: Props) => {
  const googleLoginBtn = useRef(null);
  const auth2 = useRef(null);

  const loadGoogleLoginApi = useCallback(() => {
    const prepareLoginButton = () => {
      auth2.current.attachClickHandler(
        googleLoginBtn.current,
        {},
        (googleUser) => {
          onSuccessCallback(googleUser);
        },
        (error) => {
          console.dir(error);
          throw error;
        }
      );
    };

    window.googleSDKLoaded = () => {
      window.gapi.load('auth2', () => {
        auth2.current = window.gapi.auth2.init({
          clientId,
          cookiepolicy,
          scope,
        });
        prepareLoginButton();
      });
    };
  }, []);

  const loadScript = useCallback((document, script, id, srcValue) => {
    const referenceNode = document.getElementsByTagName(script)[0];
    if (document.getElementById(id)) {
      return;
    }
    const googlejssdkNode = document.createElement(script);
    googlejssdkNode.id = id;
    googlejssdkNode.src = srcValue;
    referenceNode.parentNode.insertBefore(googlejssdkNode, referenceNode);
  }, []);

  const removeApiScript = useCallback(() => {
    const removeTag = (tagName, targetId) => {
      const targetNode = document.getElementsByTagName(tagName);
      Array.prototype.forEach.call(
        targetNode,
        (node) =>
          node.src.indexOf(targetId) >= 0 && node.parentNode.removeChild(node)
      );
    };

    removeTag('script', 'apis.google.com');

    const removeJssdk = (id) => {
      const sdkNode = document.getElementById(id);
      if (sdkNode) {
        sdkNode.parentNode.removeChild(sdkNode);
      }
    };

    removeJssdk('google-jssdk');
  }, []);

  useEffect(() => {
    loadScript(
      document,
      'script',
      'google-jssdk',
      'https://apis.google.com/js/platform.js?onload=googleSDKLoaded'
    );
    loadGoogleLoginApi();

    return () => {
      removeApiScript();
    };
  }, [loadScript, removeApiScript, loadGoogleLoginApi]);

  return (
    <GoogleLoginButton className={className} buttonRef={googleLoginBtn}>
      {children}
    </GoogleLoginButton>
  );
};

export default GoogleLoginButtonContainer;
