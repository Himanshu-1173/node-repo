const express=require('express');
const app =express();
const conn = require('./config1');
const { name } = require('ejs');
app.get("/",(req,resp)=>{
    conn.query('select * from users',(error,result)=>{
        if(error){
            resp.send(error);
        }
        else{
            resp.send(result);
        }
    })
    console.log("done");
});

app.use(express.json());


// POST METHOD
app.post("/", (req, resp) => {
  const data = req.body;
  conn.query("INSERT INTO users SET ?",data, (error, result, fields) => {
    if (error)
    {oo
        console.error(error);
    }
    else{
        resp.send(result);
    }
    

  });
});


//PUT METOD
app.put("/:id", (req, resp) => {
  const data =[req.body.username,req.body.password,req.params.id];
  conn.query("UPDATE user SET username=?, password=? where id=?",data, (error, result, fields) => {
    if (error)
    {
        console.error(error);
    }
    else{
        resp.send(result);
    }
    

  });
});

//DELETE METHOD
app.delete("/:id", (req, resp) => {
  const data =req.params.id;
  conn.query("DELETE FROM user where id=?",data, (error, result, fields) => {
    if (error)
    {
        console.error(error);
    }
    else{
        resp.send(result);
    }
    

  });
});


app.listen(5000);







// const os= require('os');
// // console.log(os.arch());
// // console.log(os.freemem()/(1024*1024*1024));
// //console.log(os.totalmem()/(1024*1024*1024));
// //console.log(os.hostname());
// //console.log(os.platform());//
// console.log(os.userInfo());




// const express=require('express');
// const multer=require('multer');
// const fs = require('fs');
// const app = express();


// const storage=multer.diskStorage({
//     destination:function (req,file,cb) {
//         cb(null,"upload-files");
        
//     },
//     filename:function(req,file,cb){
//         cb(null,file.fieldname+"-"+Date.now()+".jpeg");
//     }
// })
// const upload = multer({
//     storage: storage
// }).single('user_file');


// app.post("/upload",upload,(req,resp)=>{
//     resp.send("file upload");
// console.log("done");
// });
// app.listen(5000);