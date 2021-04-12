import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import GoogleLoginButton from "../components/google";

export default { title: "Google Login" } as Meta;

export const Button = () => (
  <GoogleLoginButton>Sign in Google</GoogleLoginButton>
);
