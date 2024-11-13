import express from "express";

const app = express();
const port = 3000;

app.use("/", (req, res) =>{
    res.json({'message':'hello from express'});
});


app.listen(port, () =>{
    console.log(`starting server at port ${port}`);    
});