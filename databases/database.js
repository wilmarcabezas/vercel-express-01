import pkg from 'pg';
const {Client} = pkg;

const connectionString ='postgres://root01:A9plOqV00gtU5StzvizopEhkZuieTdip@dpg-cnd2so6v3ddc73c9sp20-a.oregon-postgres.render.com/database01_b3hz';

const client = new Client({connectionString: connectionString, ssl:true});

const conectar=()=>{
    client.connect()
    .then(()=>console.log('Conectado a la base de datos'))
    .catch(e=>console.log(e))
}

export default conectar;
export {client}