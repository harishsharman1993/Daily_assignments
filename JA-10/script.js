console.log("working")


// const gmailtest = gmailpattern.test("harish@gmail.com")
// console.log(gmailtest,'this is gmail validation');

let getformdta=document.querySelector("#form_container")

getformdta.addEventListener("submit",(e)=>{

    e.preventDefault()

    document.querySelector("#user-error").textContent=""
    document.querySelector("#gmail-error").textContent=""
    document.querySelector("#password-error").textContent=""
    document.querySelector("#confirm-password-error").textContent=""
    document.querySelector("#phone_error").textContent=""


    let uservalue=document.querySelector("#user-input").value 
    let gmailvalue=document.querySelector("#gmail-input").value 
    let passwordvalue=document.querySelector("#password-input").value 
    let cpasswordvalue=document.querySelector("#confirm-password-input").value 
    let phonevalue=document.querySelector("#phone_number").value 

    let usernamePattern= /^[a-zA-Z0-9_]{3,}$/
    let gmailpattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    let passwordpattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    let phonepattern=/^\d{1,10}$/
    
let numlength=phonevalue.length


let isvalid=true

if(!usernamePattern.test(uservalue)){
    document.querySelector("#user-error").textContent=`please enter atleast 3char,1 uppcase,1 lowcase, 1spc ${uservalue} `
    document.querySelector("#user-error").style.display="block"
    document.querySelector("#user-error").style.color="red"
    isvalid=false
}

if(!gmailpattern.test(gmailvalue)){
    document.querySelector("#gmail-error").textContent=`please enter valid gmail id ${gmailvalue}`
    document.querySelector("#gmail-error").style.display="block"
    document.querySelector("#gmail-error").style.color="red"

    isvalid=false
}

if(!passwordpattern.test(passwordvalue)){
   
    document.querySelector("#password-error").textContent="please enter valid password  "
    document.querySelector("#password-error").style.display="block"
    document.querySelector("#password-error").style.color="red"
    isvalid=false
    
}

if(!passwordpattern.test(cpasswordvalue) && !cpasswordvalue.match(passwordvalue)){
    document.querySelector("#confirm-password-error").textContent="please should match"
document.querySelector("#confirm-password-error").style.display="block"
document.querySelector("#confirm-password-error").style.color="red"
isvalid=false

}
//****two ways of implementing this phonenumber logic*****
if(!phonepattern.test(phonevalue)){

    document.querySelector("#phone_error").textContent="num limit exceeded"
    document.querySelector("#phone_error").style.display="block"
    document.querySelector("#phone_error").style.color="red"
    isvalid=false

}


// if(numlength!==10){
//     document.querySelector("#phone_error").textContent="num limit exceeded"
//     document.querySelector("#phone_error").style.display="block"
//     document.querySelector("#phone_error").style.color="red"
//     isvalid=false

// }
if(isvalid){
    alert("successfully registered")
}







})


//What did you learn about using regex for form validation?
    //Ans: we learnt how to actually apply the excec and test methods on given user input values to meet particular pattern 
    //criteria .especially i really enjoyed learning the easy syntax to replace traditional procedures

    //How do regex patterns simplify the validation process?
    //Ans:by creating pattern and applying exec() and test() methods to simplify traditional peocedures with simple syntax

    //What are the advantages of using regex over traditional validation methods?
    //Ans:we can save rebundancy of code ,easy implemenation ,easy to understand validation process, finally supports additonal methods like replace,
    //replaceall,match ,search,filter etc

