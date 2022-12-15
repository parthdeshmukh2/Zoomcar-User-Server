const mongoose = require('mongoose');

//Schema required for User Information.
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number:Number,
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;