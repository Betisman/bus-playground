const System = require('systemic');
const { join } = require('path');

module.exports = () =>
  new System({ name: 'hello' })
  .bootstrap(join(__dirname, 'components'));

