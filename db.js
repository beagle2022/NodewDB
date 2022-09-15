require("dotenv").config();
const mysql1=require("mysql2");


const pool=mysql1.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

let sql="Select * from myusers";
//Graceful exit app
pool.execute(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    process.exit(0);

});




module.exports=pool.promise();