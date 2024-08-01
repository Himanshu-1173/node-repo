const dbConnection = require('./mongodb');
// HANDLE PROMISE USING PROMISE .THEN FUNCTION
dbConnection().then((resp) => {
   resp.find().toArray().then((data) => {
    console.warn(data)
   });
});
