var express = require('express');
var router = express.Router();
const Resume = require('../models/Resume')
const pdf = require('html-pdf')
const bodyParser = require("body-parser");
const cors = require("cors");
var fs = require('fs');
const path=require('path')

const plainTemplate = require('../resume-templates/plain')

const options = {
  height: "42cm",
  width: "35.7cm",
  timeout: "6000",
};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to server..');
});

router.post("/add", async (req, res,next) => {
  console.log(req.body)
  let newResume = Resume({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    address:req.body.address,
    state:req.body.state,
    country:req.body.country,
    zipcode:req.body.zipcode,
    phone:req.body.phone,
    email:req.body.email,
    linkedin:req.body.linkedin,
    github:req.body.github,
    experience:req.body.experience,          
    projectsList:req.body.projectsList,
    educationList:req.body.educationList,
    skillsList:req.body.skillsList,
    achievementsList:req.body.achievementsList,
    
  })
  pdf.create(plainTemplate(req.body),options).toFile("Resume.pdf", (err) => {
    
    if (err) {
      console.log(err);
      res.send(Promise.reject());
    } else res.send(Promise.resolve());
  });
  await newResume.save();
  
});
//var file = fs.readFileSync(__dirname + '..' + 'Resume.pdf', 'utf8')
// GET route -> send generated PDF to client...
router.get("/fetch-pdf", (req, res) => {  
  //return res.send(file);
  res.download('Resume.pdf', {root: path.join(__dirname, '..')});
  //console.log(path.join(__dirname, '..'));
  //'Resume.pdf', {root: path.join(__dirname, '..')}
  //return res.sendFile('Resume.pdf', {root: path.join(__dirname, '..')});
  //return res.send(file)  
});
module.exports = router;
