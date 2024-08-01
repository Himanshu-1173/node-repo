const dbConnection=require('./mongodb');

const update= async()=>{
    let data= await dbConnection();
    result= await data.updateOne({name:'Note 13'},{$set:{name:'note15'}}
    
    )
    // result = await data.updateMany(
    //     { $or: [
    //         { name: 'Note 13' },
    //         { name: 'note 7' }
    //     ]},
    //     { $set: { name: { $cond: { if: { $eq: ['$name', 'Note 13'] }, then: 'note15', else: 'Note 14' } } } }
    // );
    
    console.warn(result);
}
update();