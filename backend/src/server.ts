import express from 'express'; // serve para lidar com req e res de acordo com as rotas
import path from 'path';
import cors from 'cors';

import 'express-async-errors';



import "./database/connection"; // conexão com o banco de dados

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());

app.use(express.json()); // express não entende por padrão json, isso serve para ele entender
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);


app.listen(3333);

// fluxo de funcionamento: requisição / respostas
// localhost:3333

