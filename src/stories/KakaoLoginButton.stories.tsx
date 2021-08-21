import React from 'react';
import { ArgTypes, Meta } from '@storybook/react/types-6-0';

import KakaoLoginButton from '../components/kakao';

import '../styles/KakaoLoginButton.scss';

export default {
  title: 'Component/Kakao Login Button',
  component: KakaoLoginButton,
} as Meta;

export const Default = (args: ArgTypes) => (
  <KakaoLoginButton clientId={''} redirectUri={''} {...args} />
);
