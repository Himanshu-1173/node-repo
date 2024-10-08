const express = require('express');
const EventEmitter=require('events');
const app=express();
const event=new EventEmitter();
let count=0;
event.on('countAPI',()=>{
count++;
console.log(`API called ${count} times`);
});

app.get('/',(req,resp)=>{
    resp.send(" Api called");
    event.emit('countAPI');
});

app.get('/search',(req,resp)=>{
    resp.send("Search Api called");
    event.emit('countAPI');
});

app.get('/update',(req,resp)=>{
    resp.send("Update Api called");
    event.emit('countAPI');
});

app.listen(5000);