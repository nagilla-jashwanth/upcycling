const jwt=require('jsonwebtoken')
const verifyToken=(request,response,next)=>{
    //token verification logic

    //get bearer token from headers of req
     let bearerToken=request.headers.authorization;
    //if bearer token is not existed,unauthorized request
    if(bearerToken===undefined){
        response.send({message:"Unauthorized request"})
    }
    //bearer token is existed, get token
    else{
        const token=bearerToken.split(" ")[1];//[bearer,large token]
        //verify token using secret key
        //returns an error if token is invalid 
        //else it wont throw any error
        try{
        jwt.verify(token,"abcdef");
        next();
        }
        catch(err){
            response.send({message:err})
        }
    }
    //verify token using secret key

    //if token is valid ,allow to access protected route

    //else, ask to login again
}

module.exports=verifyToken;