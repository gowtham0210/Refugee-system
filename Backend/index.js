const express         =     require('express');
const cors            =     require('cors');
const connectDB       =     require('./Mongodb/connect.js');
//const userLogin     =     require('./router/UserloginRouter.js');
const userlogin       =     require("./Mongodb/models/schemas");
const businessLogin   =     require("./Mongodb/models/Business_Schemas");
const transcation     =     require("./Mongodb/models/Transcation_Schemas");


require('dotenv/config')


const app = express();
app.use(cors());
app.use(express.json({limit:'100mb'}));

app.get('/',(req,res)=>{
    res.send({message:'Hello World'});
})

app.post('/createlogin',function(req,res){
    const {_username,_password} = req.query;
    let newlogincrediantials = new userlogin({
        username:_username,
        password:_password
    })
    newlogincrediantials.save(function(err,newlogincrediantials){
        if(err)
        return res.send("error displays here "+err)
        else
        return res.send({status:200, message:"Login Crediantials created successfully",LoginCrediatials:newlogincrediantials})
    })
});

app.post('/transcations',function(req,res){
    const {_senderid,_sender,_receiverid,_receiver,_amount,_subsidy,_transtype} = req.query;
    let newtranscation = new transcation({
        senderid:_senderid,
        sender:_sender,
        receiver:_receiver,
        receiverid:_receiverid,
        amount:_amount,
        subsidy:_subsidy,
        transfertype:_transtype
    })
    newtranscation.save(function(err,newtranscation){
        if(err)
        return res.send("Error display: "+err)
        else
        return res.send({status:200,message:"Transcation Added Successfully",Transcation:newtranscation})
    })
});
app.get('/gettranscations',async(req,res)=>{
    const jsondata = {datas:[]}
    try{
    const {sendid} = req.query;
    const gettrans = await transcation.find({$or:[{senderid:(sendid)},{receiverid:(sendid)}]});
    const _senderid = gettrans.senderid;
    const _sender = gettrans.sender;
       // res.json(gettrans)
       if(gettrans){
        //res.send({gettrans})
        return res.send({status:200, message:"Transcation Received",trans:gettrans})
        //return res.send({status:200, message:`Transcation Retrieved Successfully`,Trans:gettrans})
        }else{
            return res.send({status:200,message:"No Transcation Found"})
        }
       }catch(err){
        console.log(err)
        return res.send({status:400,message:"The error Message is "+err})
    }
});
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
        }else{
            return res.status(404).json({
                success:false,
                message:"No Login details found",
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

app.patch('/updatelogin',async(req,res)=>{
    try{
        const {username, password} = req.query;
        const updatelogincred = await userlogin.updateOne({username:username},{$set:{password:password}});
        console.log("Updatelogin working"+updatelogincred);
        return res.status(200).json({
            success:true,
            message:"Update Login working ",
            update:updatelogincred
        })
    }catch(err){
        console.log("err"+err)
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
            return res.status(404).json({
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
