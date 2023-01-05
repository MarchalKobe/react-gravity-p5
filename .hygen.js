module.exports = {
  templates: `${__dirname}/_templates`,
  helpers: {
      root: () => __dirname,
      cwdToSrcRelative: (cwd) => {
        return cwd.replace(`${__dirname}/src`, '~');
      }
  }
}
