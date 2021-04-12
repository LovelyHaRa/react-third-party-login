import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import KakaoLoginButton from "../components/kakao";

export default { title: "Kakao Login" } as Meta;

export const Button = () => <KakaoLoginButton />;
