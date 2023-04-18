const express         =     require('express');
const cors            =     require('cors');
const connectDB       =     require('./Mongodb/connect.js');
//const userLogin     =     require('./router/UserloginRouter.js');
const userlogin       =     require("./Mongodb/models/schemas");
const businessLogin   =     require("./Mongodb/models/Business_Schemas");
const transcation     =     require("./Mongodb/models/Transcation_Schemas");
const GovernmentSchema = require('./Mongodb/models/GovernmentScheme_Schemas.js');
const schemeresponse = require('./Mongodb/models/Scheme_response.js');
const storeloanrequest = require('./Mongodb/models/Storeloanrequest');


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
        if(err){
            return res.send({status:400,message:err});
        }else{
            return res.send({status:200,message:"Transcation Added Successfully",Transcation:newtranscation});
        }
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

app.post('/government_schemes',function(req,res){
    const {gschemeid, gschemename, gschemedescription, gschemeimgurl,gschemeshortdescription,lastdate} = req.query
    try{
        let newscheme = new GovernmentSchema({
            schemeid:gschemeid,
            schemename:gschemename,
            schemedescription:gschemedescription,
            schemeshortdescription:gschemeshortdescription,
            schemeimgurl:gschemeimgurl,
            lastdate:lastdate
        })
        newscheme.save(function(err, newscheme){
            if(err)
            return res.send({status:404,message:"Unable to Create Scheme"})
            else
            return res.send({status:200,message:"Scheme Created Successfully",scheme:newscheme})
        })
    }catch(err){
        console.log(err)
        return res.send({
            status:404,
            message:"error"+err
        })
    }
})

app.get("/getschemes",async(req,res)=>{
    try{
        console.log("Working GetScheme")
        const getschemes = await GovernmentSchema.find()
        if(getschemes){
            return res.send({status:200,schemes:getschemes})
        }else{
            return res.send({status:404,message:"Schemes Not Found"})
        }
    }catch(err){
        console.log(err)
        return res.send({status:400})
    }
})

app.delete('/deleteschemes',async(req,res)=>{
    const schemeid = req.query;
    try{
        const result = await GovernmentSchema.deleteOne(schemeid)
        if(result.deletedCount === 1){
            statusCode = 200
            return res.send({status:200,message:"Deleted Successfully"})
        }else{
            statusCode = 404
            return res.send({status:404, message:"Scheme Not Deleted"})
        }
    }catch(err){
        console.log(err)
        return res.send({status:400, message:"err"+err})
    }
})

app.post('/postresponse',function(req,res){
    const {schemename, username} = req.query;
    try{
        let newresponse = new schemeresponse({
            username:username,
            schemename:schemename
        })
        newresponse.save(function(err,newresponse){
            if(err)
            return res.send({status:404,message:"Unable to Fetch response"})
            else
            return res.send({status:200,message:"Response Fetched Successfully"})
        })
    }catch(err){
        res.statusCode=400;
        return res.send({status:400,message:err})

    }
})
app.get('/getresponse',async(req,res)=>{
    try{
        const getallresponse = await schemeresponse.find()
        if(getallresponse){
            res.statusCode=200;
            return res.send({status:200,allresponse:getallresponse})
        }else{
            res.statusCode=404;
            return res.send({status:404, message:"Response Not Found"})
        }

    }catch(err){
        res.statusCode=400;
        return res.send({status:400,message:err})

    }
})
app.get("/getsinglescheme",async(req,res)=>{
    const schemeid = req.query;
    try{
        const getsinglescheme = await GovernmentSchema.findOne(schemeid)
        if(getsinglescheme){
            res.statusCode=200;
            return res.send({status:200,scheme:getsinglescheme})
        }else{
            res.statusCode=404;
            return res.send({status:404, message:"Schemes Not Found"})
        }
    }catch(err){
        console.log(err)
        return res.send({status:400})
    }
})

app.get('/findresponse',async(req,res)=>{
    const {schemename,username} = req.query;
    try{
        const getresponse = await  schemeresponse.findOne({username})
        const resschemename = getresponse.schemename
        if(schemename === resschemename && username === getresponse.username){
            res.statusCode = 200
            return res.send({status:200,message:"All ready Registered",responses:getresponse})

        }else{
            res.statusCode = 404
            return res.send({status:404,message:"Not Registered",responses:getresponse})
        }
    }catch(err){
        res.statusCode=400
        return res.send({status:400,message:"Error"+err})
    }
})

app.post('/storeloanrequest',async(req,res)=>{
    const {username,loanamt,loanpurpose, citizenmobilenumber1,citizenmobilenumber2,citizenmobilenumber3} = req.query;
    try{
        let loanrequest = new storeloanrequest({
            username:username,
            loanamt:loanamt,
            loanpurpose:loanpurpose,
            citizenmobilenumber1:citizenmobilenumber1,
            citizenmobilenumber2:citizenmobilenumber2,
            citizenmobilenumber3:citizenmobilenumber3
        })
        loanrequest.save(function(err,loanrequest){
            if(err){
                statusCode = 400
                return res.send({status:400, message:"Error : "+err})
            }else{
                statusCode = 200
                return res.send({status:200, message:"Successfull"})
            }
        })
    }catch(err){
        res.statusCode=400
        return res.send({status:400, message:"Error"+err})

    }
})

app.get('/loanrequest', async(req,res)=>{
    try{
        const allLoanrequest = await storeloanrequest.find()
        if(allLoanrequest){
            res.statusCode = 200;
            return res.send({status:200, allLoanrequest:allLoanrequest})
        }else{
            res.StatusCode = 404;
            return res.send({status:400, message:"Unable to fetch the loan Request"})
        }

    }catch(err){
        res.statusCode=404;
        return res.send({status:400,message:"Error : "+err})
    }
})
app.patch('/updateloanrequest',async(req,res)=>{
    try{
        const {username,status} = req.query;
        const updateloanreq = await storeloanrequest.updateOne({username:username},{$set:{status:status}});
        console.log("Update Loan Request")
        return res.status(200).json({
            success:true,
            message:"Update loan Request",
            update:updateloanreq
        })
    }catch(err){
        console.log("Error"+err)
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
