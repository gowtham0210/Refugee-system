const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemeresponseschemas = new Schema({
    username:{type:String, required:true},
    schemename:{type:String, required:true}
})

const schemeresponse = mongoose.model('schemeresponse',schemeresponseschemas);

module.exports = schemeresponse;