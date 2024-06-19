// .storybook/Button.stories.tsx
import React from 'react';
import { StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
} 

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  onClick: () => alert('Button clicked!'),
};
