/*function greetUser(fname){
console.log(`Welcome OnBoard ${fname}`)
}
greetUser("john")
greetUser("peter")*/


/*var greetFunction=greetUser

greetFunction('greetfunction')
greetUser('greetuser')

var greetFunction=function(fname){
    console.log(`Welcome OnBoard ${fname}`) 
}
greetFunction('greetfunction')*/


//default parameters

/*function greetUser(mobile,reg,fname='User'){//write non-default args first
//fname=fname??"User"
console.log(`Welcome ${fname} : ${mobile} :${reg}`)
}
greetUser(92839283,"BE1239283")

function userList(userData){
userData.mobile=9283082
return userData
}
let user={
    fname:"john",
    email:"john@gmail.com"
}
user=userList(user)
console.log(user)
function userList(userData){
    //destructing with alias name
    let {fname:fullname,useremail,usermobile}=userData
   console.log(fullname)
}
let user={
        fname:"john",
        email:"john@gmail.com",
        mobile:2938293
}
//object destructing
let {fname,email,mobile}=user
console.log(fname)
let arr=[90,"john",28372,"IND",{role:"admin",company:"XYZ"},[348938,3984389]]
let [marks,fname,pin,country,{role,company},[x,y]]=arr
console.log(x,y)
let arr=[20,"john","john@gmail.com"]
//let [age,[userdetails,email]]=arr
let [age,...userdetails]=arr // rest/spread operator
console.log(userdetails)*/
