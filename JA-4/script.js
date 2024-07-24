// Task 1
console.log("working")
const heading=document.getElementById("item1")

heading.style.backgroundColor="lightblue"
heading.style.fontSize="24px"

//Task 2

const paragraph=document.getElementsByClassName("p1")
 
for(i=0;i<paragraph.length;i++){
    paragraph[i].style.color="gold"
}

//Task3

const button=document.getElementsByTagName("button")

for(i=0;i<button.length;i++){
    button[i].style.border="4px solid green"
}

//Task 4

let ulist = document.querySelector('ul');
// console.log(ulist);

ulist.querySelector('#hacker').style.fontStyle="italic"
// ulist.querySelector("#hacker").style.fontFamily="Courier-New"

//Task 5

spanelmnt=document.querySelectorAll(".item")

// spanelmnt.foreach(function(element){

//     element.style.margin="20px"
// })


 for(i=0;i<spanelmnt.length;i++){
    spanelmnt[i].style.margin="20px"
 }

//  Task 6

//if we want style this  single element that can be done only through get method usiing ID

const saying=document.getElementById("say")

saying.style.color="brown"
saying.style.border = "2px dotted skyblue";
saying.style.padding = "30px";
saying.style.margin = "50px";


// -----------------------------Thank You--------------------------------------------




