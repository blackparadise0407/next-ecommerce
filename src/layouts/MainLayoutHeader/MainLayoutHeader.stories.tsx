import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainLayoutHeader from './MainLayoutHeader';
import { mockMainLayoutHeaderProps } from './MainLayoutHeader.mock';

export default {
  title: 'components/MainLayoutHeader',
  component: MainLayoutHeader,
  argsTypes: {},
} as ComponentMeta<typeof MainLayoutHeader>;

const Template: ComponentStory<typeof MainLayoutHeader> = (args) => (
  <MainLayoutHeader {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainLayoutHeaderProps.base,
};
