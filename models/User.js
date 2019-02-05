const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    googleId: {
        type:String
    }
});

mongoose.model('users',UserSchema);