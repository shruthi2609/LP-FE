let contact=document.querySelector('.contact-container')
fetch('http://localhost:3001/empDetails/2').then((res)=>{return res.json()}).then((res)=>{console.log(res)
    printUI(res)}).catch((Err)=>console.log(Err))

function printUI(data){
contact.innerHTML=`<div class="col-sm-6">
<div class="card">
  <div class="card-body">
    <h3>${data.fname}</h3>
    <p>${data.email}</p>
    <p>${data.phone}</p>
    <button>delete</button>
  </div>
</div>
</div>`
}