const ex= require('express');
const my= require('mysql');
const app= ex();
const connection=require('./database');

app.get('/', (req,res)=>{

    res.send('Hey there');

});

app.listen(3001, ()=> {
    console.log('App listening on port 3001');
    conn.connect(function(err){

        if(err) throw err;
        console.log('Database Connected');
    });
});