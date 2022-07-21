//promise creation or definition
/*const userPromise=new Promise(
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
console.log("statemet2")*/


//promise chanining
const userPromise=new Promise(
    (resolve,reject)=>{
    let user={
        fname:"john",
        email:"john@gmail.com",
        role:"admin"
    }
    if(user){
        resolve(user)
    }
    else{
        reject("user is not fetched")
    }
    }
    )
    //promise handlers -> then catch finally
 
  /* userPromise.then((result)=>getData(result)).catch((res)=>console.log(res))


    function getData(data){
        console.log("inside fun",data)
    }*/
  /*  userPromise.then((result1)=>{return result1}).then((result2)=>{
        if(result2.role==="admin"){
            result2.status="not allowed"
            return result2 //resolve
        }
        else{
            return "you are not allowed"
        }
    }).then((result3)=>{console.log("inside block3",result3)}).catch((res)=>console.log(res))

    userPromise.then((result1)=>{return result1}).then((result2)=>{
        return new Promise((resolve,reject)=>{
            result2.role==="admin"?resolve(result2):reject("you are not allowed")
        })
       
    }).then((result3)=>{console.log("inside block3",result3)}).catch((res)=>console.log("catch",res))*/









