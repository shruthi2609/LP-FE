//promise creation or definition
const userPromise=new Promise(
(resolve,reject)=>{
let user
if(user){
    resolve("user if fetched")
}
else{
    reject("user is not fetched")
}
}
)
//promise handlers -> then catch finally
console.log("statemet1")
userPromise.then((result)=>console.log(result)).catch((res)=>console.log(res)).finally(()=>console.log("end"))
console.log("statemet2")

