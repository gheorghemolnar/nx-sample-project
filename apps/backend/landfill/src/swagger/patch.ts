import j2s from 'joi-to-swagger';

import { LandfillEditDtoSchema } from '@myorg/util/types';

import { landfillPatch, landfillPatchAuthAdd, landfillPatchAuthRemove } from './data';

const { swagger: updateDto } = j2s(LandfillEditDtoSchema);

import { DEFAULT_HEADERS, PARAMS } from './common';

export const swLandfillPatch = {
  summary: 'Update a Landfill',
  tags: ['Landfills'],
  parameters: [...DEFAULT_HEADERS, ...PARAMS],
  requestBody: {
    content: {
      'application/json': {
        schema: updateDto,
        examples: {
          landfill: {
            summary: 'Landfill patch sample',
            value: landfillPatch,
          },
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'The Landfill was updated',
    },
  },
};

export const swLandfillPatchHide = {
    summary: 'Deactivate a Landfill',
    tags: ['Landfills'],
    parameters: [...DEFAULT_HEADERS, ...PARAMS],
    responses: {
        '200': {
            description: 'The Landfill was updated',
        },
    },
};

export const swLandfillPatchShow = {
    summary: 'Activate a Landfill',
    tags: ['Landfills'],
    parameters: [...DEFAULT_HEADERS, ...PARAMS],
    responses: {
        '200': {
            description: 'The Landfill was updated',
        },
    },
};

export const swLandfillPatchAuthAdd = {
    summary: 'Add authorizations on a Landfill',
    tags: ['Landfills'],
    parameters: [...DEFAULT_HEADERS, ...PARAMS],
    requestBody: {
        content: {
          'application/json': {
            schema: updateDto,
            examples: {
              landfill: {
                summary: 'Landfill patch auth add',
                value: landfillPatchAuthAdd,
              },
            },
          },
        },
    },    
    responses: {
        '200': {
            description: 'The Landfill was updated',
        },
    },
};

export const swLandfillPatchAuthRemove = {
    summary: 'Remove authorizations on a Landfill',
    tags: ['Landfills'],
    parameters: [...DEFAULT_HEADERS, ...PARAMS],
    requestBody: {
        content: {
          'application/json': {
            schema: updateDto,
            examples: {
              landfill: {
                summary: 'Landfill patch auth remove',
                value: landfillPatchAuthRemove,
              },
            },
          },
        },
    },
    responses: {
        '200': {
            description: 'The Landfill was updated',
        },
    },
};

