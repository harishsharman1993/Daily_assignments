// Task 1: Creating and Appending an Element

const div=document.createElement('div')
// const div1=div.createTextNode("hello world!")
// console.log(div1);
div.textContent='hello world!'
document.body.appendChild(div)


//Task2: Changing the Content of an Existing Element
  
const parg =  document.getElementById("para");
console.log(parg);

// parg.replaceWith("this is harish")

 parg.textContent= "this is updated contect";

//Task 3: Creating and Appending a List of Items

const ul = document.createElement("ul");
 ul.id = "hari";
 document.body.appendChild(ul);

 function addlist(Content) {
    const li = document.createElement("li"); 
    li.textContent = `${Content}`;
    document.querySelector("#hari").appendChild(li);
    ul.style.listStyleType="none"
    ul.style.lineHeight = "50px"
    
 } 

 addlist("☮️akhil");
 addlist("☮️ajay");
 addlist("☮️guru");
 addlist("☮️lahari");



//  Task 4: Editing an Attribute of an Element

 const img = document.querySelector("#img");
 img.setAttribute("src","https://imgd.aeplcdn.com/1280x720/n/cw/ec/107565/ducati-panigale-v4-right-side-view2.jpeg?isig=0")
   

//  Task 5: Deleting an Element

const remove=document.querySelector("#hello")
remove.remove()
