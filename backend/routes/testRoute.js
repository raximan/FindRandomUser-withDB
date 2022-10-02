const express = require("express")
const router = express.Router();
const Feedback = require("../models/UserModel");


router.route("/create").post((req,res)=>{
    const firstName=req.body.fırstName
    const lastName= req.body.lastName
    const Company = req.body.company
    const Ideas = req.body.ideas
    const ratingValue = req.body.ratingValue
    const newFeedback = new Feedback({
        firstName,
        lastName,
        Company,
        Ideas,
        ratingValue
        
    })
    newFeedback.save()
})

module.exports = router
