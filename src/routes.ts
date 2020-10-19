import {Router} from 'express'
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

//exporting all routes to SERVER.TS
routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;
