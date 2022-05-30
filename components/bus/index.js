const System = require('systemic');
const rabbitmq = require('systemic-rabbitmq');

module.exports = new System({ name: 'bus' })
  .add('bus', rabbitmq()).dependsOn('config', 'logger');
