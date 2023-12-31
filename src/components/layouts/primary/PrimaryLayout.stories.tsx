import { Meta, StoryFn } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

export default {
  title: 'layouts/Primary',
  component: PrimaryLayout,
  //---More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof PrimaryLayout>;
//--ComponentMeta depreceated --> Meta

//---More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: StoryFn<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

//--ComponentStory depreceated -> StoryFn

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;
