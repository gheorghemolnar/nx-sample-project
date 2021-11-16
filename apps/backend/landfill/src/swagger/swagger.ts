import { getSwaggerConf } from './swagger.def';

import { swLandfillDelete } from './delete';
import { swLandfillGet, swLandfillGetAll } from './get';
import { swLandfillPatch, swLandfillPatchHide, swLandfillPatchShow, swLandfillPatchAuthAdd, swLandfillPatchAuthRemove } from './patch';
import { swLandfillPost } from './post';

const swLandfillRouter = {
  '/landfills': {
    get: {
      ...swLandfillGetAll,
    },
    post: {
      ...swLandfillPost,
    },
  },
  '/landfills/{id}': {
    delete: {
      ...swLandfillDelete,
    },
    get: {
      ...swLandfillGet,
    },
    patch: {
      ...swLandfillPatch,
    },
  },
  '/landfills/{id}/hide': {
    patch: {
        ...swLandfillPatchHide,
    },
  },
  '/landfills/{id}/show': {
    patch: {
        ...swLandfillPatchShow,
    },
  },
  '/landfills/{id}/authorization/add': {
    patch: {
        ...swLandfillPatchAuthAdd,
    },
  },
  '/landfills/{id}/authorization/remove': {
    patch: {
        ...swLandfillPatchAuthRemove,
    },
  }
};

/** export Swagger configuration with supplied port */
export function getSwagger(port) {
  return getSwaggerConf(port, swLandfillRouter);
}
