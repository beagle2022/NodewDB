const ex= require('express');
const my= require('mysql');
const app= ex();

app.listen(3001, ()=> {
    console.log('App listening on port 3001');
});