const express = require("express")
const router = express.Router();
const Schemas = require('../models/schemas.js')
router.get('./login',(res,req)=>{
    
    
    try{
        
        newlogindetails.save().then(data=>{
            console.log(data);
        })
        
    }catch(err){
        console.log(err);
        res.end('Login details not added');

    }

});
router.get()

module.exports = router;
