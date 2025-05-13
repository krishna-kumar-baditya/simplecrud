const express = require('express')
const app = express()
require('dotenv').config()
const db = require('./config/db')

app.set('view engine','ejs')
app.set('views','views')
const session = require('express-session');
const flash = require("connect-flash");

app.use(express.urlencoded({
    extended : true
}))
app.use(session({
    secret: 'MyS3CR3T#@!@CGGmn',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(flash());
app.use((req, res, next) => {
    res.locals.success_message = req.flash("success");
    res.locals.error_message = req.flash("error");
    next();
});

app.use(require('./router/crud.routes'))

app.listen(process.env.PORT,async ()=>{
    console.log(`server is running on http://127.0.0.1:${process.env.PORT}`);
    await db.connection()
})