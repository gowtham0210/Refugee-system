const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Refugee_login_schema = new Schema({
    username:{type:String, required:true},
    password:{type:String, required:true}
});

const login = mongoose.model('Refugee_login',Refugee_login_schema);

module.exports = login;
