const auto=(req,res,next)=>{
    const {user}=req.query
    if(user == 'variabile'){
        next();
    }else{
        res.status(401).send("Non sei loggato");
    }
}

module.exports=auto;