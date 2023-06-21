import { Meta, StoryFn } from '@storybook/react';
import { mockHeaderProps } from './Hader.mocks';
import Header, { IHeader } from './Header';

export default {
  title: 'navigation/Header',
  component: Header,
  //---More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Header>;
//--ComponentMeta depreceated --> Meta

//---More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

//--ComponentStory depreceated -> StoryFn

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderProps.base,
} as IHeader;
