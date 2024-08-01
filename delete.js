const dbConnection = require('./mongodb');

const deleteData=async()=>{
    const data =await dbConnection();
    let result = await data.deleteOne({price:
        750});
    if(result.acknowledged){
        console.log("data deleted")
    }
    else{
        console.log("data not deleted");
    }
}
deleteData();