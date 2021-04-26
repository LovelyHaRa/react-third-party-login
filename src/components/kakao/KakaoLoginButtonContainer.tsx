import React, { useCallback } from "react";

import KakaoLoginButton from "./KakaoLoginButton";

type Props = {
  /** client id를 지정할 떄 사용합니다 */
  clientId?: string;
  /** redirect uri를 지정할 떄 사용합니다 */
  redirectUri?: string;
  /** state를 지정할 떄 사용합니다 */
  state?: string;
  /** popup창으로 열때 지정합니다 */
  isPopupOpen?: boolean;
  /** popup창의 windowFeatures를 지정합니다  */
  popupWindowFeature?: string;
};

const KakaoLoginButtonContainer = ({
  clientId = "",
  redirectUri = "",
  state = "",
  isPopupOpen = false,
  popupWindowFeature = "width=500, height=750, status",
}: Props) => {
  const handleClick = useCallback(() => {
    const requestUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
    if (isPopupOpen) {
      window.open(requestUrl, "_blank", popupWindowFeature);
    } else {
      window.location.href = requestUrl;
    }
  }, []);

  return <KakaoLoginButton handleClick={handleClick} />;
};

export default KakaoLoginButtonContainer;
