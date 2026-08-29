 console.log("hello internal css");
//  console.error("0000 error");
//  console.warn("its warning messagr");
//  let age=12;
// //  age=12;
//  console.log(age);
//  const country="nepal";
//  console.log(country);



// let user={
//     name:"ram",
//     age:20,
// }; 
// console.log{user.name,user.age};

// const {name,age}=user;
// console.log(name);



// let ages=30;
// if (ages===20){
//     console.log(true);
// }else{
//     console.log(false);
// }




// let marks= 30;
// if(marks>40){
//     console.log("pass");
// }else if(marks>80){
//     console.log("distinction");
// }else{
//     console.log("fail");
// }




let fname="sujan";
let lname="gandu";

let user={
    name:"ho",
};
console.log(fname+ " "+ lname + " "+user.name);




// const fruits=["banana","apple","mango"];
// fruits.unshift("strawberry");
// // fruits.shift();

// console.log(fruits);




// const number1=["ram","shyam"];
// const number2=[...number1,4,5,6,7];

// console.log(number2);





// const marks=[50,60,80,90];

// let sum = 0;
// let average = 0;
// for (let i=0;i<marks.length;i++){
//     sum = sum+marks[i];
//     average = sum/marks.length;
// }

// console.log(sum);
// console.log(average);





// function sum(a,b,c){
//     console.log(a+b);
// }
// const sum=(a,b,c)=>{
//     console.log(b+c);
// };
// sum(20,30,10);



// function marks(a,b,c,d){
//     let total=a+b+c+d;
//     return total/4;
//     // console.log(a+b+c+d);

// }
// let avg=marks(40,50,60,70);
// console.log("Average Marks:",avg);
    




// function calculationTotal(marks){
//     return total;
// }
// function calculateTotal(marks){
//     let total=0;
//     for (let i=0;i<marks.length;i++){
//         total+=marks[i];
//         return total;
//     }
//     function calculateAverage(total,length){
//         return total/length;
//     }
//     function getGrade(average){
//         if(average>=80){
//             return "A";
//         }
//         if(average>=60){
//             return "B";
//         }
//         if(average>=40){
//             return "c";
//         }
//         else{
//             return "fail";
//         }
//     }
//     let grade=
// }





// const tagValue=document.querySelector("h1");
// tagValue.style.backgroundColor="blue";
// console.log(tagValue);



const form=document.getElementById("registration");

form.addEventListener("submit",function (event) {
    event.preventDefault();    
    const username=document.getElementById("username");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const message=document.getElementById("message");

if(username===""){
    message.innerText="please enter username";
    message.style.color="red";
}
if(email===""){
    message.innerText="please enter email";
    message.style.color="red";
}
if(password===""){
    message.innerText="plesae enter password";
    message.style.color="red";
}
});