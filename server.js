var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var api=require('./modules/votes.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api',api);

app.listen(3000, ()=>console.log("servidor iniciado con express, puerto 3000"));