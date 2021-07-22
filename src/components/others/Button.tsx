import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';

export interface IButtonProps {
  buttonState: 'idle' | 'loading' | 'success' | 'error';
  variant: 'filled' | 'light' | 'outline' | 'link';
  color: string;
  colorText: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  round: 'sm' | 'md' | 'lg' | 'xl';
  shadow: 'sm' | 'md' | 'lg' | 'xl';
  disabled: boolean;
  block: boolean;
  animation: boolean;
  hoverEffect:
    | 'pan'
    | 'mimas'
    | 'calypso'
    | 'skoll'
    | 'greip'
    | 'dione'
    | 'bestia';
  children: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Button(props: IButtonProps) {
  return (
    <button
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
    >
      Вася
    </button>
  );
}
Button.defaultProps = {
  buttonState: 'idle',
  variant: 'filled',
  color: '#232240',
  colorText: 'black',
  size: 'sm',
  round: 'sm',
  shadow: 'sm',
  disabled: false,
  block: false,
  animation: false,
  hoverEffect: 'pan',
  children: 'Click',
};
