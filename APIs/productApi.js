const exp=require('express');
const expressAsyncHandler = require('express-async-handler');

const productApp=exp.Router();

productApp.get("/get-products",expressAsyncHandler(async(request,response)=>{

    const productCollection=request.app.get('productCollection');

    let products=await productCollection.find().toArray()

    response.status(200).send({message:"Products",payload:products})
}))

productApp.get('/get-product/:id',expressAsyncHandler(async(request,response)=>{

    let userid=(+request.params.id)

    const productCollection=request.app.get('productCollection');

    let user=await productCollection.findOne({id:userid})

    response.send({message:"Product Found",payload:user})

}))


productApp.use(exp.json())

productApp.post('/create-product',expressAsyncHandler(async(request,response)=>{


    let newuser=(request.body);

    const productCollection=request.app.get('productCollection');

    await productCollection.insertOne(newuser);

    response.status(200).send({message:"Product created"});
    
}))



productApp.put('/update-product',expressAsyncHandler(async(request,response)=>{

    const productCollection=request.app.get('productCollection');

    let updateproduct=request.body;

    await productCollection.updateOne({product:newuser.product},{$set:{...newuser}})
   
    response.status(200).send({message:"Product updated"});
}))

productApp.delete('/delete-product/:id',expressAsyncHandler(async(request,response)=>{
    
    const productCollection=request.app.get('productCollection');

    let userid=(+request.params.id);

    await productCollection.deleteOne({id:userid})

    response.status(200).send({message:"Product deleted"})
}))

module.exports=productApp