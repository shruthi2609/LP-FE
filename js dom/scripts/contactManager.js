let contact=document.querySelector('.contact-container')
fetch('http://localhost:3001/empDetails').then((res)=>{return res.json()}).then((res)=>{console.log(res)
    printUI(res)}).catch((Err)=>console.log(Err))

function printUI(data){
  let output=''
data.map((item)=>{
 output+=`<div class="col-sm-3">
  <div class="card">
    <div class="card-body">
      <h3>${item.fname}</h3>
      <p>${item.email}</p>
      <p>${item.phone}</p>
      <button>delete</button>
    </div>
  </div>
  </div>`
})
contact.innerHTML=output
}