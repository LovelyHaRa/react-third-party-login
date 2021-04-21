import React from "react";
import { ArgTypes, Meta } from "@storybook/react/types-6-0";

import KakaoLoginButton from "../components/kakao";

export default { title: "Kakao Login", component: KakaoLoginButton } as Meta;

export const Button = (args: ArgTypes) => <KakaoLoginButton {...args} />;
