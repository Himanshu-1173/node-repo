const dbConnection=require('./mongodb');

const insert = async() => {
  const db = await dbConnection();
  const result = await db.insertMany([{
    name:"note 5",
    brand:"redmi",
    price:7500,
    category:"mobile",
  },
{
  name:"note 6",
  brand:"micromax",
  price:750,
  category:"mobile",
},
{
name:"note 7",
brand:"MI",
price:7600,
category:"mobile",
},])
if (result.acknowledged) {
    console.log("data inserted")
    
}
else{
   console.log("inertion failed");
}
}

insert();