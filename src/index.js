import express from 'express'

//definition of app and router
const server= express();
const port= 3340;

//Using middleware and creating server
server.use(express.json())    //To read data on json format from  users´s request 

//Creating server
server.listen(port, ()=>{
    console.log("Servidor Online...")
})
