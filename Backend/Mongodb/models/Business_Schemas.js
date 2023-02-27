const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Business_login_schema = new Schema({
    username:{type:String, required:true},
    password:{type:String, required:true}
});

const businessLogin = mongoose.model('Business_login_schema',Business_login_schema);

module.exports = businessLogin;