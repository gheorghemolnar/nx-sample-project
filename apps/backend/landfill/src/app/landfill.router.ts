import express, { Router } from 'express';

import { buildRo, revertMiddleware } from '@myorg/feature/api-response';
import { listSagas } from '@myorg/feature/saga';

import {create, deleteById, getAll, getById, hideById, showById, updateById, addAuthorizationById, removeAuthorizationById} from './landfill-orchestration.controller';
import { clientKafka } from './landfill-orchestration.kafka-config';
import { clientRedis } from './landfill-orchestration.redis';

const landfillRouter: Router = express.Router();

/**
 * @method POST
 *
 **/
landfillRouter.post('/', revertMiddleware(clientKafka, clientRedis, listSagas.LANDFILL_POST), create, buildRo);

/**
 * @method PATCH
 *
 **/
landfillRouter.patch('/:id', revertMiddleware(clientKafka, clientRedis, listSagas.LANDFILL_PATCH), updateById, buildRo);
landfillRouter.patch('/:id/show', revertMiddleware(clientKafka, clientRedis, listSagas.LANDFILL_SHOW), showById, buildRo);
landfillRouter.patch('/:id/hide', revertMiddleware(clientKafka, clientRedis, listSagas.LANDFILL_HIDE), hideById, buildRo);
landfillRouter.patch('/:id/authorization/add', revertMiddleware(clientKafka, clientRedis, listSagas.LANDFILL_ADD_AUTHORIZATION), addAuthorizationById, buildRo);
landfillRouter.patch('/:id/authorization/remove', revertMiddleware(clientKafka, clientRedis, listSagas.LANDFILL_REMOVE_AUTHORIZATION), removeAuthorizationById, buildRo);

/**
 * @method GET
 *
 **/
landfillRouter.get('/:id', getById);
landfillRouter.get('/', getAll)

/**
 * @method DELETE
 *
 **/
landfillRouter.delete('/:id', revertMiddleware(clientKafka, clientRedis, listSagas.LANDFILL_DELETE), deleteById);



/**
* @main
* @description
* Declaration of main router
**/
const router: Router = express.Router();

router.use('/api/v1/', [
    router.use('/landfills', landfillRouter)
])
export default router;
