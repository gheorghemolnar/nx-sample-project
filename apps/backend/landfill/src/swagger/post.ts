import swaggerJSDoc from 'swagger-jsdoc';
import j2s from 'joi-to-swagger';

// import {
//   LandfillCreateDtoSchema,
//   LandfillEditDtoSchema,
//   LandfillRo,
// } from '@myorg/util/types';

import { landfillPost } from './data';

// const { swagger: createDto } = j2s(LandfillCreateDtoSchema);

import { DEFAULT_HEADERS } from './common';

export const swLandfillPost = {
  summary: 'Create a Landfill',
  tags: ['Landfills'],
  parameters: [
    ...DEFAULT_HEADERS,
    {
      in: 'header',
      name: 'access-control-expose-headers',
      description: 'CORS',
      schema: {
        type: 'string',
        default: 'api-trx-id',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {},
        examples: {
          landfill: {
            summary: 'Landfill post sample',
            value: landfillPost,
          },
        },
      },
    },
  },
  responses: {
    '202': {
      description: 'The created Landfill',
    },
  },
};
