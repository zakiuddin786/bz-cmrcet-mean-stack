const express = require("express");
const path = require('path');

const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
      return res.send("hello Developers")
})

const port = 3000;

app.listen(port, () => console.log(`app listening on port ${port}!`));