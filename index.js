const express= require('express');
//const my= require('mysql');
const app= express();
const connection=require('./database');

app.get('/', (req,res)=>{
    let sql="Select * FROM node_twitter.myusers";
    connection.query(sql,(err,results)=>{
        if(err) throw err;
        res.send(results);
    });
    
});

app.listen(3010, ()=> {
    console.log('App listening on port 3010');
    connection.connect(function(err){ 

        if(err) throw err;
        console.log('Database Connected');
    });
});