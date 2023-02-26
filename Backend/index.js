// //
// //const bodyparser = require('body-parser');
// //const routesHandle = require('./router/handler');
// const mongoose = require('mongoose');
// const Schemas = require('./models/schemas.js')

// 
// // const app = express()
// // app.use(bodyparser.urlencoded({extended:false}))
// // app.use(bodyparser.json())
// // app.use('/',routesHandle);

// //DB connection
// mongoose.set('strictQuery',false);
// // ,{useNewUrlParser:true,useUnifiedTopology:true}
// mongoose.connect(process.env.DB_URI)
// .then(() => {
//     console.log('DB connected');
// })
// .catch((err) => {
//     console.log("Error = "+err)
// })


// const createDocument = async() => {
//     const logindetails = {username:'admin',password:'admin@1234'};
//     const newlogindetails = new Schemas(logindetails)
//     const result = await newlogindetails.save();
//     console.log(result);
// }

// createDocument();


// // const PORT = process.env.PORT || 4000;
// // app.listen(PORT, ()=>{
// //     console.log(`Server is running on port ${PORT}.`);

// // });

const express = require('express');
const cors = require('cors');
const connectDB = require('./Mongodb/connect.js');
require('dotenv/config')


const app = express();
app.use(cors());
app.use(express.json({limit:'100mb'}));

app.get('/',(req,res)=>{
    res.send({message:'Hello World'});
})

const startserver = async ()=>{
    try{
        connectDB(process.env.DB_URI); 
        app.listen(8080,()=>console.log("Server started on port https://localhost:8080"));
    }catch(err){
        console.log(err)
    }

}

startserver();
