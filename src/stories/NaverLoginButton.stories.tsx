import React from "react";
import { ArgTypes, Meta } from "@storybook/react/types-6-0";

import NaverLoginButton from "../components/naver";

export default {
  title: "Naver Login",
  component: NaverLoginButton,
} as Meta;

export const Button = (args: ArgTypes) => <NaverLoginButton {...args} />;
