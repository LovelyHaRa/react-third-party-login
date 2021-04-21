import React, { useCallback } from "react";

import KakaoLoginButton from "./KakaoLoginButton";

type Props = {
  /** client id를 지정할 떄 사용합니다 */
  clientId?: string;
  /** redirect uri를 지정할 떄 사용합니다 */
  redirectUri?: string;
  /** state를 지정할 떄 사용합니다 */
  state?: string;
};

const KakaoLoginButtonContainer = ({
  clientId = "",
  redirectUri = "",
  state = "",
}: Props) => {
  const handleClick = useCallback(() => {
    const requestUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
    window.open(requestUrl, "_blank");
  }, []);

  return <KakaoLoginButton handleClick={handleClick} />;
};

export default KakaoLoginButtonContainer;
