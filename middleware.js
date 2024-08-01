module.exports= reqFilter=(req,resp,next)=>{
    // console.log('request filter');
    if(!req.query.age){
        resp.send("Please provide age");
    }
    else if(req.query.age < 18){
        resp.send("You can't access");
    }
    else{
        next();
    }
    
}