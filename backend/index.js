const express = require('express');
const app = express();
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.post('/data', (req, res)=>{
    const {name, desc} = req.body;

    console.log(name, desc);
})
app.listen(3001, ()=>{
    console.log("server has started on 3001");
})