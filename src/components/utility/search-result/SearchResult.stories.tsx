import { Meta, StoryFn } from '@storybook/react';
import SearchResult, { ISearchResult } from './SearchResult';
import { mockSearchResultProps } from './SearchResult.mocks';

export default {
  title: 'utility/SearchResult',
  component: SearchResult,
  argTypes: {},
} as Meta<typeof SearchResult>;

const Template: StoryFn<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSearchResultProps.base,
} as ISearchResult;
