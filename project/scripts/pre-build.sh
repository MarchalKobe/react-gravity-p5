#!/usr/bin/env bash

if [ -n "$NEXT_BUILD_EXPORT_STORYBOOK" ]; then
  echo "<script>window['PREVIEW_URL'] = '/_storybook/iframe.html';</script>" > .storybook/manager-head.html
  yarn build:storybook
  mv storybook-static/ public/_storybook
else
  echo "Skipping storybook. Add NEXT_BUILD_EXPORT_STORYBOOK to env variables if you want Storybook to be built."
fi
