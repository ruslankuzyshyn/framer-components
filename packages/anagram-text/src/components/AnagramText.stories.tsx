import type { Meta, StoryObj } from '@storybook/react';

import AnagramText from './AnagramText';

type TypeOfAnagramText = typeof AnagramText;

const meta: Meta<TypeOfAnagramText> = {
  // @ts-expect-error Ignore this error for now, will fix later TODO Fix this error
  component: AnagramText,
};

export default meta;
type Story = StoryObj<TypeOfAnagramText>;

export const Primary: Story = {
  name: 'Demo',
  args: {
    value: 'Hello, World!',
  },
};
