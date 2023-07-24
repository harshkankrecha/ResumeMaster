const mongoose = require('mongoose')

var ResumeSchema = mongoose.Schema(
    { 
      firstname:String,
      lastname:String,
      address:String,
      state:String,
      country:String,
      zipcode:String,
      phone:String,
      email:String,
      linkedin:String,
      github:String,
      experience:[{'role':String,'company':String,'description':String}],
      projectsList:[{'title':String,'description':String}],
      educationList:[{'university':String,"course":String,"percentage":String,"degree":String,"startdate":String,"enddate":String}],
      skillsList:[{'skill':String}],
      achievementsList:[{'achievement':String}],
      education:String,
      university:String,
      age:Number,
      job:String,
      role:String,
      skills:String
    })
  
var Resume = mongoose.model("Resume",ResumeSchema)
module.exports = Resume 
