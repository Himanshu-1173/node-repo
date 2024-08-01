const dbConnection = require('./mongodb');

//HANDLE PROMISE USING ASYNC AWAIT FUNCTION 
const main=async ()=>{
let data = await dbConnection();
data=await data.find().toArray();
console.warn(data);
}
main();
