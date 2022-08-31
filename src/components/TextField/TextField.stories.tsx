import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextField, { TextFieldProps } from './TextField';
import { mockTextFieldProps } from './TextField.mock';

export default {
  title: 'components/TextField',
  component: TextField,
  argsTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTextFieldProps.base,
} as TextFieldProps;
