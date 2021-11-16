export const DEFAULT_HEADERS = [
  {
    in: 'header',
    name: 'api-uid',
    description: 'token to be passed as a header',
    required: true,
    schema: {
      type: 'string',
      default: 'some_value',
    },
  },
];

export const PARAMS = [
  {
    in: 'path',
    name: 'id',
    schema: {
      type: 'string',
    },
    required: true,
  },
];
