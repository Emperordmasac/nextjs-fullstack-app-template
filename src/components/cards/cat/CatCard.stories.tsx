import { Meta, StoryFn } from '@storybook/react';
import { mockCatCardProps } from './CardCard.mocks';
import CatCard, { ICatCard } from './CatCard';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  //---More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof CatCard>;
//--ComponentMeta depreceated --> Meta

//---More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: StoryFn<typeof CatCard> = (args) => <CatCard {...args} />;

//--ComponentStory depreceated -> StoryFn

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCatCardProps.base,
} as ICatCard;
