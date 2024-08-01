const express=require('express');
require('./config');
const product =require('./product');

const app=express();
app.use(express.json());


//GET METHOD
app.get("/search/:key", async(req, resp) => {
    console.log(req.params.key);
  let data = await product.find({
    "$or": [
      { "name": { $regex : req.params.key } },
      { "brand": { $regex : req.params.key } },
      { "category": { $regex : req.params.key } }
    ]
  });
  resp.send(data);
});
app.listen(5000);


// //POST METHOD
// app.post('/create',async(req,resp)=>{
//     let data= new product(req.body);
//     let result = await data.save();
//     resp.send('Done');
// });

//DELETE METHOD 
// app.delete('/delete/:_id',async(req,resp)=>{
//     let data= await product.deleteOne(req.params.id);
//     resp.send(data);
// });

// //PUT METHOD
// app.put('/update/:_id',async(req,resp)=>{
//     let data= await product.updateOne(req.params,{$set:req.body});
//     resp.send(data);
// });





// const reqFilter=require('./middleware');
// const app= express();
// const route= express.Router();
// // app.use(reqFilter);

// route.use(reqFilter);

// app.get('/',(req,resp)=>{
//     resp.send("Welcome to home page");
// })

// app.get('/about',(req,resp)=>{
//     resp.send("Welcome to about page");
// })

// route.get('/users',reqFilter,(req,resp)=>{
//     resp.send("Welcome to users page");
// })

// route.get('/contact',reqFilter,(req,resp)=>{
//     resp.send("Welcome to contact page");
// })
// app.use('/',route);

// app.listen(4000);
