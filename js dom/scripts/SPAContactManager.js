let contact=document.querySelector('.contact-container')
let addContact=document.querySelector('.user-form')
const ufname=document.getElementById('uname')
const uemail=document.getElementById('email')
const uphone=document.getElementById('phone')
let msgcont=document.getElementById('msg-cont')
fetch('http://localhost:3001/empDetails').then((res)=>{return res.json()}).then((res)=>{console.log(res)
    printUI(res)}).catch((Err)=>console.log(Err))

function printUI(data){
  let output=''
data.map((item)=>{
 output+=`<div class="col-sm-3">
  <div class="card">
  <!--<div class="card-body"  data-id=${item.id} data-uname=${item.fname}>-->
    <div class="card-body" id=${item.id} data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-phone=${item.phone}>
      <h3 id='ui-uname'>${item.fname}</h3>
      <p id='ui-email'>${item.email}</p>
      <p id='ui-phone'>${item.phone}</p>
      <!-- approach 1 to get id
      <button id=${item.id} onClick="deleteUser(this.id)">delete</button>-->

      <button id='delete-btn'>delete</button>

      <button id='edit-btn'>edit</button>
    </div>
  </div>
  </div>`
})
contact.innerHTML=output
}

addContact.addEventListener('submit',(e)=>{

    e.preventDefault()
    const data={
      id:Date.now(),
      fname:ufname.value,
      email:uemail.value,
      phone: uphone.value
  } 
  fetch("http://localhost:3001/empDetails",{
  method:'POST',
  body:JSON.stringify(data),
  headers:{
      'Content-Type':'application/json'
  }
  }).then((res)=>{
    console.log("api is hit")
    return res.json()}).then((res)=location.reload()
  ).catch((err)=>{
  msgcont.innerHTML="Sorry ! Try Again "
  })
  })
  contact.addEventListener('click',(e)=>{
   e.preventDefault()
    const parentElement=e.target.parentElement
   const uid=parentElement.id
   console.log(e)
    if(e.target.id==='delete-btn'){
        fetch(`http://localhost:3001/empDetails/${uid}`,{
            method:'DELETE'
           }).then((res)=>{return res.json}).then((res)=>location.reload()).catch((err)=>console.log(err))
    }
    if(e.target.id==='edit-btn'){
      /*  const parent=e.target.parentElement
        const username=document.getElementById('ui-uname').textContent
        console.log(username)*/
        const parent=e.target.parentElement
        let fname=parent.dataset.fname
        let email=parent.dataset.email
        let phone=parent.dataset.phone
        let userid=parent.dataset.id
       ufname.value=fname
       uemail.value=email
       uphone.value=phone
       addContact.addEventListener('submit',(e)=>{
        console.log("isnide edit event")
        e.preventDefault()
        const data={
            fname:ufname.value,
            email:uemail.value,
            phone:uphone.value
        }
        fetch(`http://localhost:3001/empDetails/${userid}`,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
        }).then((res)=>{return res.json()}).then((res)=>location.reload()).catch((err)=>console.log(err))
       })
    }
    })
//approach 1
  function deleteUser(userid){
   fetch(`http://localhost:3001/empDetails/${userid}`,{
    method:'DELETE'
   }).then((res)=>{return res.json}).then((res)=>location.reload()).catch((err)=>console.log(err))
  }