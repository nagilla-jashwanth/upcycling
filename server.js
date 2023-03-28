 //create express application
//express returns function 
const exp=require("express")

const app=exp()

//assign port num
app.listen(3500,()=>console.log("server listening on port 3500..."))

var cors = require('cors')
app.use(cors())
//get mongo client
const mclient=require('mongodb').MongoClient;

//connect to mongoDB server
mclient.connect('mongodb://127.0.0.1:27017')
.then(dbref=>{
    //get  database object
    let dbobj=dbref.db('demodb');
    //create collection objecrs
    let userCollection=dbobj.collection("userscollection")
    let productCollection=dbobj.collection("productscollection")


    //share collection objecrts to api's
    //app.set(name of the obj,name of actual obj);
    app.set("userCollection",userCollection);
    app.set("productCollection",productCollection);
    console.log("Connected to database server")
})
.catch(err=>console.log("database connection is ",err))



//import userapp

const userApp=require('./APIs/userapi')
const productApp=require('./APIs/productapi')
//forward request to userApi when url path starts with /users-app
app.use('/users-api',userApp);
app.use('/product-api',productApp);
//forward request to productApi



const invalidPathHandlerMiddleware=(request,response,next)=>{
    response.send({message:"Invalid path"})
}

app.use(invalidPathHandlerMiddleware)

const errHandler=(error,request,response,next)=>{
    response.send({"error-message":error.message});
}

app.use(errHandler)