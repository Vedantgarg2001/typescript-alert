import React from 'react';
import { StoryFn } from '@storybook/react';
import RadioButton, { RadioButtonProps } from '../RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} 

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Male', 'Female', 'Others'],
  onChange: (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  },
};
