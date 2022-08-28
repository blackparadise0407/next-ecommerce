import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { ButtonProps } from './Button';
import { mockButtonProps } from './Button.mock';

export default {
  title: 'components/Button',
  component: Button,
  argsTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockButtonProps.base,
} as ButtonProps;
