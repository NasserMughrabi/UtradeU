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
    }
})

const ProfileSchema = new mongoose.Schema({
    user : {
        type: mongoose.SchemaTypes.ObjectID,
        require : true
    }
})

UserSchema.statics.findByName = function(firstName)
{
    console.log("Reached new method")
    const user = this.where({firstName : new RegExp(firstName, 'i')})
    console.log(user)
    // return this.where({firstName : new RegExp(firstName, 'i')});
}

module.exports = mongoose.model("User", UserSchema)