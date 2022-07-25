//primitive DT
/*console.log("hello JS")
var fname="john"
var grade='A'
var salary=40000
var cgpa=9.09
console.log(typeof(salary),typeof(cgpa))
var backlogs=0
console.log(typeof(backlogs))*/

//non primitive DT
var users=["john","john@gmail.com",22,92039283928,true]
console.log("the user name is"+" "+users[0]+" "+"the email is"+" "+users[1])
//template literals or string literals
console.log(`the username is ${users[0]} , email is ${users[1]}`)

//plain obj literals
var userobject={
    fname:"john",
    email:"john@gmail.com",
    age:22,
    phone:293892382,
    employed:true,
    lastcredit:[1000,2000,500,100]
}
userobject.company="XYZ"
console.log(userobject)

//array of object
const listofusers=[
    {
        fname:"john",
        email:"john@gmail.com",
        age:22,
        phone:293892382,
        employed:true,
        lastcredit:[1000,2000,500,100]
    },
    {
        fname:"peter",
        email:"peter@gmail.com",
        age:23,
        phone:8297389723,
        employed:true,
        lastcredit:[1000]
    }
]
console.log(listofusers[0].phone)

const age=10;

/*function sample(){
a=10 //hoisting 
let fname="peter"
console.log("inside",a)
console.log("inside",fname)
}
console.log("outside",a)
sample()
console.log("outside",fname)
*/













