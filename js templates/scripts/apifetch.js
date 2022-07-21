console.log("fetch method")
fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))


