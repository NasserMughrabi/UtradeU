const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        require : true
    },
    lastName : {
        type: String,
        require : true
    },
    uID : {
        type: String,
        require : true
    },
    
    phoneNumber : {
        type: String,
        require : false
    },
    email : {
        type: String,
        require : true
    },
    bio : {
        type: String,
        require: false
    },
    major : {
        type: String,
        require: false
    },
    services : {
        type: [String],
        require: false
    }
})

UserSchema.statics.findByName = function(firstName)
{
    console.log("Reached new method")
    const user = this.where({firstName : new RegExp(firstName, 'i')})
    console.log(user)
}

module.exports = mongoose.model("User", UserSchema)