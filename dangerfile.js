const path = require('path');
const bolDanger = require('@bitsoflove/danger');

bolDanger.project({ js: true });

bolDanger.eslint({
  engine: require('eslint').ESLint,
  config: {},
  args: {},
});
