class BasicDetails{
    constructor(age){
        this.age=age
    }
}
class EmpDetails extends BasicDetails{
    constructor(age,fname,email,phone){
        super(age)
        this.fname=fname
        this.email=email
        this.phone=phone
    }
    getDetails(){
        console.log(this.fname,this.email,this.age)
    }
}
const obj1=new EmpDetails("20","john","john@gmail.com",9823823)
obj1.getDetails()
/*console.log(obj1.hasOwnProperty("fname"))
console.log(obj1)*/

function TraineeDetails(tname,temail){
this.tname=tname
this.temail=temail
}
TraineeDetails.prototype.getTraineeDetails=function(){
    console.log(this.tname,this.temail)
}

const obj2=new TraineeDetails("xyz","xyz@gmail.com")
obj2.getTraineeDetails()

