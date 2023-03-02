const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transcation_schema = new Schema({
    senderid:{type:String, required:true},
    sender:{type:String, required:true},
    receiverid:{type:String, required:true},
    receiver:{type:String, required:true},
    amount:{type:String,required:true},
    subsidy:{type:String,required:true},
    transfertype:{type:String,required:true},
});


const transcation = mongoose.model('Transcations',Transcation_schema);

module.exports = transcation;