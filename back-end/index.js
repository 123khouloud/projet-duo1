const express = require('express');
const cors =require('cors');
const {getAllphotos}=require("./database/index");
const {add}=require("./database/index");
const {update}=require("./database/index");
const {remove}=require("./database/index");

const port = 3000;
const app = express();

const db = require('./database/index');

app.use(cors());
app.use(express.json())



app.get('/api/image',(req,res)=> {
    getAllphotos()
    .then((result)=>{res.status(200).json(result)})
    .catch((error)=>console.log(error))

    })


app.post('/api/image/add',(req,res)=> {
    add(req.body)
    .then((result)=>{res.status(200).json(result)})
    .catch((error)=>console.log(error))

    })


app.put('/api/image/update/:id',(req,res)=>{
  update(req.params.id,req.body)
.then((result)=>{res.status(202).json(result)})
.catch((error)=>console.log(error))
}
)


app.delete('/api/image/delete/:id',(req,res)=> {
    remove(req.params.id)
    .then((result)=>{res.status(204).json(result)})
    .catch((error)=>console.log(error))
}) 


 





app.listen(port, ()=>{
console.log( `listening on  ${port}` );
})