const express = require('express');
const dbConnection=require('./mongodb');
const mongodb=require('mongodb');

const app=express();

app.use(express.json());


//........___GET METHOD__........ //
app.get('/',async(req,resp)=>{
    let data =await dbConnection();
    let result= await data.find().toArray();
    resp.send(result);
})


//........___POST METHOD__........ //
app.post('/',async(req,resp)=>{
    let data=await dbConnection();
    let result = await data.insertMany(req.body);
    resp.send(result);
})


//........___PUT METHOD__........ //
app.put('/:name',async(req,resp)=>{
    let data=await dbConnection();
    let result=await data.updateMany(
        {brand:req.params.name},
        {$set:req.body}
    );
    resp.send({result:"Updated"});
});


//........___DELETE METHOD__........ //
app.delete('/:id',async(req,resp)=>{
    let data=await dbConnection();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    

    resp.send(result);
});

app.listen(5000);