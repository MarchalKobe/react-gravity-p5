import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BitsOfLoveHeart } from './bits-of-love-heart.component';

export default {
  title: 'BitsOfLoveHeart',
  component: BitsOfLoveHeart,
} as ComponentMeta<typeof BitsOfLoveHeart>;

export const Default: ComponentStory<typeof BitsOfLoveHeart> = () => (
  <a
    href="https://bitsoflove.be"
    target="_blank"
    className="group text-xs"
    rel="noreferrer"
  >
    Made by
    <BitsOfLoveHeart />
    Bits of Love
  </a>
);
