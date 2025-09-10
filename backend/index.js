const express = require('express');
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors());

app.post('/data',(req,res)=>{
  const {name, desc} = req.body;
  console.log(name, desc)
})

app.listen(3001, ()=>{
  console.log("server is running on 3001");
})