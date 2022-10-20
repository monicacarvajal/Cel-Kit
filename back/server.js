const app=require("./app")

//Setear el archivo de configuracion
const dotenv=require("dotenv");
dotenv.config({path: 'back/config/config.env'})

//Llamemos al server
const server=app.listen(process.env.PORT, () => {
    console.log(`servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})