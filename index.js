require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet")
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');



var mongoose = require('mongoose')
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/users');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//var Student = mongoose.model("Student",studentSchema)
//var Student = require("./models/studentModel")
var Resume = require("./models/Resume")
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var studentsRouter = require('./routes/students');
var mainRouter = require('./routes/main');
var app = express();

//helmet
app.use(helmet())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/main', mainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(5000,()=>{console.log("Server started at port 5000..")})
module.exports = app;
