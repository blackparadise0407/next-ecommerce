import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainLayoutFooter from './MainLayoutFooter';
import { mockMainLayoutFooterProps } from './MainLayoutFooter.mock';

export default {
  title: 'components/MainLayoutFooter',
  component: MainLayoutFooter,
  argsTypes: {},
} as ComponentMeta<typeof MainLayoutFooter>;

const Template: ComponentStory<typeof MainLayoutFooter> = (args) => (
  <MainLayoutFooter {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainLayoutFooterProps.base,
};
