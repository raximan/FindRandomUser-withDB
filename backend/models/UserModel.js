const mongoose  = require("mongoose");

const  UserSchema = {
    firstName: String,
    lastName:String,
    Company: String,
    Ideas: String,
    ratingValue:Number,
}

const Feedback = mongoose.model("Feedback",UserSchema);

module.exports = Feedback

