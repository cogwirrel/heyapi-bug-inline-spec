
const { createClient } = require('@hey-api/openapi-ts');

const spec = {
  openapi: '3.0.3',
  info: {
    version: '1.0.0',
    title: 'Hello',
  },
  paths: {
    '/hello': {
      get: {
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

createClient({
  input: spec,
  output: 'out',
  dryRun: true,
  plugins: ['@hey-api/client-fetch'],
});

