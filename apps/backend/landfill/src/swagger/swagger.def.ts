import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger configuration
 */
export function getSwaggerConf(port, paths) {
  const swagger: swaggerJSDoc.OAS3Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Landfill API',
        version: '1.0.0',
        description: 'Landfill-Orchestrator',
      },
      servers: [
        {
          url: `http://localhost:${port}/api/v1/`,
        },
      ],
      paths: {
        ...paths,
      },
    },
    apis: ['**/*.router.{ts,js}'],
  };
  return swagger;
}
