import { Meta, StoryFn } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

export default {
  title: 'layouts/Sidebar',
  component: SidebarLayout,
  //---More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SidebarLayout>;
//--ComponentMeta depreceated --> Meta

//---More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: StoryFn<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

//--ComponentStory depreceated -> StoryFn

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSidebarLayoutProps.base,
} as ISidebarLayout;
