const replace = require('rollup-plugin-replace');
const envType = process.env.ENV_TYPE;

module.exports = {
  rollup(config) {
    // removes the esm prefix -> that just makes importing the module more difficult
    config.output.file = config.output.file.replace('.esm', '');

    if (envType)
      config.plugins.push(
        replace({ 'process.envType': `'${envType}'` }),
      );
    return config;
  },
};