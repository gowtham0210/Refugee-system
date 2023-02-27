const express = require('express');
const cors = require('cors');
const connectDB = require('./Mongodb/connect.js');
//const userLogin = require('./router/UserloginRouter.js');
const userlogin = require("./Mongodb/models/schemas");
const businessLogin = require("./Mongodb/models/Business_Schemas");

require('dotenv/config')


const app = express();
app.use(cors());
app.use(express.json({limit:'100mb'}));

app.get('/',(req,res)=>{
    res.send({message:'Hello World'});
})

//RefugeeLogin
app.get('/userlogin',async(req,res)=>{
    try{
        const {username,password} = req.query;
        
        const getusername = await userlogin.findOne({username});
        const retrievedusername = getusername.username;
        const retrievedpassword = getusername.password;
        if(username === retrievedusername && retrievedpassword === password){
            console.log(username+" "+ password+" retrieved successfully");
            return res.status(200).json({
                success:true,
                message:"retrieved successfully",
            })
        }
    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"Retrieve Not Successfull"+error
        })
    }
})
app.get('/test',async(req,res)=>{
    try{
        console.log("Working")
        return res.status(200).json({
            success:true,
            message:"test login",
        })
    }catch(error){
        console.log("error"+error);
    }
})

//Business Login
app.get('/businessLogin',async(req,res)=>{
    try{
        console.log("Business Login working");
        const {username, password} = req.query;
        const getusername = await businessLogin.findOne({username});
        const retrievedusername = getusername.username;
        const retrievedpassword = getusername.password;
        console.log(retrievedpassword,retrievedusername);
        if(username === retrievedusername && retrievedpassword === password){
            console.log(username+" "+ password+" retrieved successfully");
                return res.status(200).json({
                    success:true,
                    message:"Business login retrieved successfully",
                })
        }else{
            console.log(username,password);
            return res.status(200).json({
                success:true,
                message:"Business Login Route working but not retrieve"
            })
        }
    }catch(error){
        console.log(error);
        return res.status(404).json({
            success:false,
            message:"Business Login Retrieve Not success"+error
        })
    }
    
})


//Starting server
const startserver = async ()=>{
    try{
        connectDB(process.env.DB_URI);
        app.listen(8080,()=>console.log("Server started on port https://localhost:8080"));
    }catch(err){
        console.log(err)
    }

}

startserver();
