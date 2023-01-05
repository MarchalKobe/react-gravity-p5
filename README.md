# Next.js-Tailwind-Storybook Starter


## Setup

```sh
$ cd project

# Install dependencies
$ yarn

# Create .env & edit if necessary
$ cp .env.example .env

# Run the dev server
$ yarn start:dev
```

## Development

| Function                                      | Command                |
|-----------------------------------------------|------------------------|
| Run web                                       | `yarn start:dev`       |
| Run storybook                                 | `yarn start:storybook` |
| Build                                         | `yarn build`           |

## Project Structure

```sh
/.circleci          # CircleCI configuration
|
/.github            # GitHub configuration
|
/.vscode            # VSCode configuration
|
/_templates         # Hygen templates (code generation)
|
/project            # The root of the next.js project
  |
  +-- /.storybook   # Storybook configuration
  |
  +-- /public       # Next.js public dir, for static content (see https://nextjs.org/docs/basic-features/static-file-serving)
  |
  +-- /src          # The root of source code
    |
    +-- /entities   # Feature-sliced entities
    |
    +-- /features   # Feature-sliced features
    |
    +-- /pages      # Feature-sliced pages / Next.js pages (https://nextjs.org/docs/basic-features/pages)
    |
    +-- /shared     # Feature-sliced shared
```

## Contributing

See https://www.notion.so/bitsoflove/Git-workflow-ae619b3cbdc145a89fdf13954506222e
