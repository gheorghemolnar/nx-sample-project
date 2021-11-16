import { DEFAULT_HEADERS, PARAMS } from './common';

export const swLandfillGet = {
  tags: ['Landfills'],
  parameters: [...DEFAULT_HEADERS, ...PARAMS],
  responses: {
    '200': {
      description: 'The Landfill has been sent',
    },
    '400': {
      description: 'Bad request',
    },
  },
};
export const swLandfillGetAll = {
  summary: 'Retrieve Landfills list',
  tags: ['Landfills'],
  parameters: [...DEFAULT_HEADERS],
  responses: {
    '200': {
      description: 'Array containing the Landfills',
      content: {
        'application/json': {},
      },
    },
  },
};
