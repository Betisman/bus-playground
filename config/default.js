module.exports = {
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
  routes: {
    admin: {
      swaggerValidator: {
        apiDocEndpoint: '/__/docs/api',
        validateRequests: true,
        validateResponses: true,
        validationEndpoint: '/test',
        format: 'yaml',
        yaml: {
          file: './docs/syncapi.yaml',
        },
      },
    },
  },
  logger: {
    transport: 'console',
    include: [
      'tracer',
      'timestamp',
      'level',
      'message',
      'error.message',
      'error.code',
      'error.stack',
      'request.url',
      'request.headers',
      'request.params',
      'request.method',
      'response.statusCode',
      'response.headers',
      'response.time',
      'process',
      'system',
      'package.name',
      'service',
    ],
    exclude: ['password', 'secret', 'token', 'request.headers.cookie', 'dependencies', 'devDependencies'],
  },
  bus: {
    vhosts: {
      hhvpavpj: {
        connection: {
          url: process.env.RABBITMQ_URL,
        },
        exchanges: ['my_exchange'],
        queues: ['demo_q'],
        bindings: ['my_exchange[hola.don.pepito] -> demo_q'],
        publications: {
          demo_pub: {
            exchange: 'my_exchange',
            routingKey: 'hola.don.pepito',
          }
        },
        subscriptions: {
          demo_sub: {
            queue: 'demo_q',
            prefetch: 3,
            // contentType: 'application/json',
          }
        }
      }
    }
  }
};
