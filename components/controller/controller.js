module.exports = () => {
  const start = async ({
    logger, bus,
  }) => {
    logger.info('Starting hello controller');

    const { broker } = bus;
    const handler = (message, content, ackOrNack) => {
      console.log('content', JSON.stringify(content, null, 2));
      ackOrNack();
    };

    broker.subscribe('demo_sub', async (err, subscription) => {
      subscription.on('message', handler);
      return Promise.resolve();
    });
  };

  return { start };
};
