import React from 'react';
import { Story } from '@storybook/react';
import Button, { IButtonProps } from './Button';
import { useArgTypes } from '@storybook/api';

export default {
  title: 'General/Buttons',
  component: Button,
  argTypes: {
    buttonState: {
      description: 'Button state',
      options: ['idle', 'loading', 'success', 'error'],
      control: { type: 'select' },
    },
    variant: {
      description: 'Variant of the Button',
      options: ['filled', 'light', 'outline', 'link'],
      control: { type: 'select' },
    },
    color: {
      description: 'Color the Button',
      control: {
        type: 'color',
        presetColors: [
          { color: '#232240', title: 'primary' },
          { color: '#ecc94b', title: 'secondary' },
        ],
      },
    },
    colorText: {
      description: 'Text Color',
      control: {
        type: 'color',
        presetColors: [
          { color: '#fff', title: 'white' },
          { color: '#000', title: 'black' },
          { color: '#232240', title: 'primary' },
        ],
      },
    },
    size: {
      description: 'Size the Button',
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    round: {
      description: 'Round the Button',
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    shadow: {
      description: 'Size the Button',
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      description: 'Disabled Button',
      type: 'boolean',
    },
    block: {
      description: 'Full With Button',
      type: 'boolean',
    },
    animation: {
      description: 'Activate Animation?',
      type: 'boolean',
    },
    hoverEffect: {
      description: 'Effect when hovering on the button',
      options: ['pan', 'mimas', 'calypso', 'skoll', 'greip', 'dione', 'bestia'],
      control: { type: 'select' },
    },
    children: {
      description: 'The button content',
      defaultValue: 'Press the Button',
      control: { type: 'text', required: true },
    },
  },
};

export const Button2 = (props: IButtonProps) => <Button {...props} />;
Button2.args = {
  size: 'sm',
  color: '#232240',
};

/*
export const WithIcon: Story = (props) => (
  <Button
    icon={
      <svg viewBox="0 0 11 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.40891 14.1791C7.97127 12.6787 11 9.33934 11 6C11 2.96243 8.53757 0.5 5.5 0.5C2.46243 0.5 0 2.96243 0 6C0 9.33934 3.02873 12.6787 4.59109 14.1791C5.10601 14.6736 5.89399 14.6736 6.40891 14.1791ZM5.5 8.25C6.74264 8.25 7.75 7.24264 7.75 6C7.75 4.75736 6.74264 3.75 5.5 3.75C4.25736 3.75 3.25 4.75736 3.25 6C3.25 7.24264 4.25736 8.25 5.5 8.25Z"
        />
      </svg>
    }
    {...props}
  />
);*/
