const express = require('express');
const app = express();
app.use(express.urlencoded({extended : true})) //Userd to access forms

app.use(express.static("public"))
app.set('view engine','ejs');
app.use(OriginalLogger);

app.get('/',(req,res) =>{
    res.render("index",{text : 'World'});
})

const userRouter = require('./Router/router');
app.use('/users', userRouter);

function OriginalLogger(req,res,next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000);