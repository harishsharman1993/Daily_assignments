// Task1: Generate Random Numbers:
// min=parseInt(prompt("enter your num"))
// max=parseInt(prompt("enter your num"))

//By using prompt we can get random numbers between any range
function getRandomNumber(min, max) {
  let RandoNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(RandoNum);
}

getRandomNumber(1, 100);

//Task-2:Round Numbers

// we can round the numbers using ceil ,floor, round methods
num = parseFloat(prompt("enter your value"));
function roundNumbers(num) {
  return {
    roundedup: Math.ceil(num),
    roundedDown: Math.floor(num),
    roundedNear: Math.round(num),
  };
}

let RandomNum = roundNumbers(num);
console.log(RandomNum);

//Task3:Find Maximum and Minimum  using Spread operator (...) of given array

function findmaxmin(arrayNum) {
  return {
    min: Math.min(...arrayNum),
    max: Math.max(...arrayNum),
  };
}

console.log(findmaxmin([3, 4, 5, 7, 8]));

//Task4: calculate Power and Square Root using pow and sqrt inbult keywords of math library

base = parseInt(prompt("enter your number"));
exponent = parseInt(prompt("enter your number"));

function CalcSqrtandpow(base, exponent) {
  return {
    power: Math.pow(base, exponent),
    Squareroot: Math.sqrt(base),
  };
}

console.log(CalcSqrtandpow(base, exponent));

// TO find today date and time

function getDateandTime() {
  let now = new Date();

  var year = now.getFullYear();
  var month = String(now.getMonth() + 1);
  var date = String(now.getDate());

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  return {
    currentDate: `${year}:${month}:${date}`,
    cuurentTime: `${hours}:${minutes}:${seconds}`,
  };
}

console.log(getDateandTime());

// Task6:get Date methods

const getDatemethods = (date) => {
  const givenDate = new Date(date);
  console.log(givenDate);

  let fullyear = givenDate.getFullYear();
  let month = givenDate.getMonth() + 1;
  let day = givenDate.getDate();

  return {
    Year: `${fullyear}`,
    Month: `${month}`,
    Day: `${day}`,
  };
};

console.log(getDatemethods("2012-07-15"));




// Task7: Format Date in different locales

function FormatDateInLocales(date){
let GivenDay=new Date(date)

let USFormat=GivenDay.toLocaleDateString('en-US')
let FRFormat=GivenDay.toLocaleDateString('fr-FR')

return{
 en:`${USFormat}`,
 fr:`${FRFormat}`,
}

}

console.log(FormatDateInLocales('2024-07-05'))


//Task 8:Add days to Date


function addDaystoDate(date,Adddays){
let givenDate=new Date(date)
let originalDate=Number(givenDate.getDate())


let addDate=Number(givenDate.getDate()+Adddays)

let addedDays=addDate-originalDate

return `${addedDays}`+' more days from  now'





}
let Adddays=parseInt(prompt("enter your number"))
let result=addDaystoDate('2001-03-21',Adddays)
console.log(result)


// Bonus Task-1

//Exploring more math methods


function exploreMathMethods(){
let absoluteValue=Math.abs(-45)
let flooredValue=Math.floor(34.89)
let ceiledValue=Math.ceil(34.89)
let loggedValue =Math.log(34.89)
let exponentialValue=Math.exp(34.89)

return {
absoluteVal:absoluteValue,
flooredVal:flooredValue,
ceiledVal:ceiledValue,
loggedVal:loggedValue,
exponentialVal:exponentialValue

}

}
console.log(exploreMathMethods())

//Bonus Task-2
//Advanced Data MAnipulations

function dateDiffInfo(date1,date2){

    // create Date objects from i/p dates

    const d1=new Date(date1)
    const d2=new Date(date2)

    //calaculate the day diff in MS

    const diffinms=Math.abs(d1-d2)

    const diffindays=Math.floor(diffinms/1000*60*60*24)

    //determine which date is earlier

    const isearlier= d1<d2

// Format dates as MM/DD/YYYY
     const formattedDates = [
    `${d1.getMonth() + 1}/${d1.getDate()}/${d1.getFullYear()}`,
    `${d2.getMonth() + 1}/${d2.getDate()}/${d2.getFullYear()}`
];  

return {
    diffindays,
    isearlier,
    formattedDates
}

}

console.log(dateDiffInfo('2012-04-06','2017-08-21'))