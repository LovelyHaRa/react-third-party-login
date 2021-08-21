import React from 'react';
import { ArgTypes, Meta } from '@storybook/react/types-6-0';

import NaverLoginButton from '../components/naver';

import '../styles/NaverLoginButton.scss';

export default {
  title: 'Component/Naver Login Button',
  component: NaverLoginButton,
} as Meta;

export const Default = (args: ArgTypes) => (
  <NaverLoginButton clientId={''} redirectUri={''} state={''} {...args} />
);
