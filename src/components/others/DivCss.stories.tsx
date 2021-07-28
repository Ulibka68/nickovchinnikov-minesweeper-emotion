import React from 'react';
import { Story } from '@storybook/react';
import { useArgTypes } from '@storybook/api';
import DivCssTemplate from './DivCss';

export default {
  title: 'General/Others',
  component: DivCssTemplate,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};

export const DivCss = () => <DivCssTemplate />;
DivCss.storyName = 'Переиспользование классов';
