//const User = require("../models/user");
const userlogin = require("../Mongodb/models/schemas");

exports.signin = async(req,res)=>{
    try{
        const {username, password} = req.body;
        const getusername = await userlogin.findOne({username});
        const retrievedusername = getusername.username;
        const retrievedpassword = getusername.password;
        if(username === retrievedusername && retrievedpassword === password){
            console.log(username+" "+ password+"retrieved successfully");
            return res.status(200).json({
                success:true,
                message:"retrieved successfully",
            })
        }

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Retrieve Not Successfull"
        })
    }
}