const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanrequest = new Schema({
    username:{type:String,required:true},
    loanamt:{type:String, required:true},
    loanpurpose:{type:String, required:true},
    citizenmobilenumber1:{type:String, required:true},
    citizenmobilenumber2:{type:String, required:true},
    citizenmobilenumber3:{type:String, required:true},
    status:{type:String,required:true}
})

const storeloanrequest = mongoose.model('storeloanrequest',loanrequest);

module.exports = storeloanrequest;