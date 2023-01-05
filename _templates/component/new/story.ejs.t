---
to: <%= cwd %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { <%= name %> } from './<%= h.changeCase.param(name) %>.component';

export default {
  title: '<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

export const Default: ComponentStory<typeof <%= name %>> = () => <<%= name %> />;
