import { ComponentMeta, ComponentStory } from '@storybook/react';

import Hero, { HeroProps } from './Hero';
import { mockHeroProps } from './Hero.mock';

export default {
  title: 'components/Hero',
  component: Hero,
  argsTypes: {},
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockHeroProps.base,
} as HeroProps;
