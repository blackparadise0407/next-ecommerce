import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainLayoutHeader from './MainLayoutHeader';
import { mockMainLayoutNavbarProps } from './MainLayoutHeader.mock';

export default {
  title: 'components/MainLayoutNavbar',
  component: MainLayoutHeader,
  argsTypes: {},
} as ComponentMeta<typeof MainLayoutHeader>;

const Template: ComponentStory<typeof MainLayoutHeader> = (args) => (
  <MainLayoutHeader {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainLayoutNavbarProps.base,
};
