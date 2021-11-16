import { DEFAULT_HEADERS, PARAMS } from './common';

export const swLandfillDelete = {
  tags: ['Landfills'],
  parameters: [...DEFAULT_HEADERS, ...PARAMS],
  responses: {
    '204': {
      description: 'The Landfill has been deleted',
    },
  },
};
