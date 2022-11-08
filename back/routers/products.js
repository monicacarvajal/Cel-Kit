const express=require("express")
const router=express.Router();

const{getProducts, newProduct, getProductsById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta
router.route('/producto/:id').get(getProductsById); //Ruta para consultar por id
router.route('/producto/:id').put(updateProduct); //Creacion de la ruta de actualización
router.route('/producto/:id').delete(deleteProduct); //Creación de la ruta de eliminación por id

module.exports=router;