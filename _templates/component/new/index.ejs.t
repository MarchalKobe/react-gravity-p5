---
to: <%= cwd %>/<%= h.changeCase.param(name) %>/index.tsx
---
export { <%= name %> } from './<%= h.changeCase.param(name) %>.component';
