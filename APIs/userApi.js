//create-mini-express (Separator Router) app


const exp=require('express');

const userApp=exp.Router();

const verifyToken=require('./middlewares/verifyToken')
//import express-aync-handler
//it returns a function to the variable
const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
userApp.use(exp.json())

//CREATE USER API

//register user
//PUBLIC ROUTE
userApp.post('/register-user',expressAsyncHandler(async(request,response)=>{


    //get user collection
    const userCollection=request.app.get('userCollection')


    //get user from client
    const newuser=request.body;

    //verify user is already existed

    let userObj=await userCollection.findOne({username:newuser.username})

    //if user already existed
    if(userObj!==null){
        response.status(200).send({message:"User already Exists"})
    }
    else{


        //hash the password
        //to hash the password install bcryptjs module
        //it executes asynchronouysly
       let hashedpassword=await bcryptjs.hash(newuser.password,6);
       //replace password with hahed password
       newuser.password=hashedpassword 
        //insert user
        await userCollection.insertOne(newuser)
        response.status(201).send({message:"User created"})
    } 
}))


userApp.get('/get-users',expressAsyncHandler(async(request,response)=>{

    const userCollection=request.app.get('userCollection')

    let users=await userCollection.find().toArray();

    response.status(200).send({message:"Users",payload:users});
}))
 
//PRIVATE ROUTE

//authorize 
userApp.get('/get-user/:username',verifyToken,expressAsyncHandler(async(request,response)=>{

    console.log(request.headers);
    const userCollection=request.app.get('userCollection')

    //get username
    let  name=request.params.username;

    //find user by username
    let user=await userCollection.findOne({username:name})

    //send req

    response.status(200).send({message:"User",payload:user});
}))

 
 
userApp.post('/update-user',expressAsyncHandler(async(request,response)=>{

    const userCollection=request.app.get('userCollection')
    let updateObj=request.body;

    let newpass=await bcryptjs.hash(updateObj.password,6);
    updateObj.password=newpass;
    await userCollection.updateOne({email:updateObj.email},{$set:{...updateObj}})

    response.status(200).send({message:"User Updated"});
}))
//delete user by username
//PRIVATE ROUTE
userApp.delete('/delete-user/:username',verifyToken,expressAsyncHandler(async(request,response)=>{


    const userCollection=request.app.get('userCollection')

    //get username
    let  name=request.params.username;

    await userCollection.deleteOne({username:name})

    response.status(200).send({message:"User Deleted"})
}))

//user login
//PUBLIC ROUTE
userApp.post('/login-user',expressAsyncHandler(async(request,response)=>{
 
    const userCollection=request.app.get('userCollection')


    //get user from client
    const usercredentials=request.body;

    //verify username of usercredentials
    let user= await userCollection.findOne({username:usercredentials.username})


    //if username is invalid
      
    if(user===null){
        response.send({message:"Invalid User"});
    }
    else{
        let isequal=await bcryptjs.compare(usercredentials.password,user.password);

        //if passwords not matched
        if(isequal===false){
            response.send({message:"Invalid password"})
        }
        else{

            //JWT(Json Web To ken) Token
            //sign(payload,secretkey,expiry time(s))
            // if expiry time is kept in "" then it denotes milli secs ex:"40"
            let signedtoken=jwt.sign({username:user.username},"abcdef",{expiresIn:1000})
            //send token in response
            response.status(200).send({message:"success",token:signedtoken,user:user})


        }
    }
}))



//PROTECTED ROUTES
//from client side we must make authenticated request 
userApp.get('/test',verifyToken,(request,response)=>{
 

    console.log(request.headers);
    response.send({message:"Reply from protected route"})
})

module.exports=userApp


