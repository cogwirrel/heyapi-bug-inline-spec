
export const spec = {
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
