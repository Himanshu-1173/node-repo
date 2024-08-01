const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema=new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });
    const productModel=mongoose.model('products', productSchema);
    let data =new productModel({name:'m10',price:2000,brand:"poco",category:"mobile"});
    let result = data.save();
    console.log(result);


const updateInDb=async()=>{
    const product= await mongoose.model('products', productSchema);
    let data=await product.updateOne(
        {name:'m10'},
        {$set:{
            price:4000,name:"m40"
        }}
       )
    console.log(data);

}
const deleteInDb=async()=>{
    const product= await mongoose.model('products', productSchema);
    let data=await product.deleteMany(
        {name:'m10'})
    console.log(data);
}
const findInDb=async()=>{
    const product= await mongoose.model('products', productSchema);
    let data=await product.find({name:"m40"})
    console.log(data);
}
findInDb();