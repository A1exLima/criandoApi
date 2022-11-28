const express = require ('express');
const app = express();

//view engine setup
app.set("view engine", 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routers
const apiRouter = require('./routers/api');
app.use('/api', apiRouter);


app.listen(3000, ()=>{console.log('Server Runing Port 3000')});

module.exports = app;


