import axios from 'axios';


const api = axios.create({
    baseURL : 'http://localhost:3333',
});
/* se voce estiver rodando sua aplicação no celular, coloque o ip da sua maquina na rede (ver no expo) sem a porta.
* se estiver com emulador do ios, pode usar localhost
* se estiver no emulador do android rodar o seguinte comando no terminal:
* comando: adb reverse tcp:3333 tcp:3333
* e agora, só usar localhost :)
* obs: o ip da maquina funciona em todas as opções. 
*/


export default api;
