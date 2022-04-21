const mongoose = require('mongoose');
const uniqueMail = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});
userSchema.plugin(uniqueMail);

module.exports = mongoose.model('user', userSchema);