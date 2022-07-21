function prFunction(){
return new Promise(
    (resolve,reject)=>{
    let user
    user?resolve(user):reject(new Error("user is not defined"))
}
)
}
/*prFunction().then((res)=>console.log(res)).catch((err)=>console.log(err))*/
async function caller(){
    try{
    const res=await prFunction()
    console.log(res)
    }
    catch(err){
        console.log(err)
    }
}
caller()


