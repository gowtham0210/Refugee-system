var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("Create Login detail working");
    return res.statusCode(200);
});

module.exports = router;