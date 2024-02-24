import express from 'express';
import productController from './controllers/productsController.js';
import conectar,{client} from './databases/database.js';

const app = express();
app.use('/productos',productController);


const port = 4000;
conectar();

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})