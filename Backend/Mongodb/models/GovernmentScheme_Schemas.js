const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GovernmentSchema_Schemas = new Schema({
       schemeid:{type:String, required:true},
       schemename:{type:String, required:true},
       schemeshortdescription:{type:String, required:true},
       schemedescription:{type:String, required:true},
       schemeimgurl:{type:String, required:true},
       lastdate:{type:String, required:true}

})
const GovernmentSchema = mongoose.model('Government_schem', GovernmentSchema_Schemas);

module.exports = GovernmentSchema;