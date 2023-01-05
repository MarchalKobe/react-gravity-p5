---
to: <%= cwd %>/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.component.tsx
---
import { FunctionComponent } from 'react';

export interface <%= name %>Props {
}

export const <%= name %>: FunctionComponent<<%= name %>Props> = ({}) => {
  return (
    <div><%= name %></div>
  );
};
