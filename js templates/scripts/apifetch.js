/************
 * end points
 * all the users:
http://localhost:3001/empDetails - all data

specific useR:

http://localhost:3001/empDetails/id

http://localhost:3001/empDetails?prop=value

create: (POST)
http://localhost:3001/empDetails

update:(PATCH)

http://localhost:3001/empDetails/id - user to be updated
{ dataprop : valueprop}

delete:
http://localhost:3001/empDetails/id 

 * ********** */
function getAll(){
    fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
}
getAll()


function postData(){
    let url="http://localhost:3001/empDetails/2"
    const data={
        email:"karry@gmail.com"
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
}


function patchReq(){
    const url="http://localhost:3001/empDetails/2"
    const data={
        fname: "Karry",
    }
    fetch(url,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
}

function putReq(){
    const url="http://localhost:3001/empDetails/2"
    const data={
        fname: "Karry",
        email:"karry@gmail.com"
    }
    fetch(url,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
}

function deleteReq(){
    fetch("http://localhost:3001/empDetails/2",{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
}



