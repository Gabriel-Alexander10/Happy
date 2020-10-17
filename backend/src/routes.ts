import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesControllers from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// MVC
// Model "representação das tabelas no banco"  +/-, (não exatamente isso, mas serve)
//-> "representação de uma entidade"
// Views "como as coisas são vosualizadas"
// Controlers "onde deve ficar a lógica das rotas"


routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesControllers.create);

export default routes;
