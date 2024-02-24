import express from 'express';
import productController from './controllers/productsController.js';

const app = express();
app.use('/productos',productController);


const port = 4000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})