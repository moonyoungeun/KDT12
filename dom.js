// let boxEl = document.getElementById("seconde__box"); //문자열로 표시해야함.

// console.log(boxEl);




//classList
// let boxEl = document.querySelector(".box");

// boxEl.classList.add("active");
// console.log(boxEl.classList.contains("active"));

// boxEl.classList.remove("active");
// console.log(boxEl.classList.contains("active"));



//addEventListener
// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click",function(){
//     if(boxEl.classList.contains("orange")){
//         boxEl.classList.remove("orange");
//         boxEl.classList.add("skyblue");
//     } else if (boxEl.classList.contains("skyblue")){
//         boxEl.classList.remove("skyblue");
//         boxEl.classList.add("orange");
//     } else{
//         boxEl.classList.add("orange");
//     }
// })


//setAttribute
// let boxEl = document.querySelector(".box")
// let inputEl = document.getElementById("input");

// boxEl.addEventListener("click", function(){
//     inputEl.setAttribute("type","button");
// })



//textContent
// let boxEl = document.querySelector(".box");
// console.log(boxEl.textContent);
// boxEl.textContent = "KDT";
// console.log(boxEl.textContent);


// let boxOne = document.querySelector(".box-1");

// let boxTwo = document.querySelector(".box-2");

// let boxThree = document.querySelector(".box-3");

// console.log("boxOne");

// console.log("boxTwo");

// console.log("boxThree");


// boxOne.addEventListener("click",function(){
    
//     boxOne.classList.add("orange");

//     boxTwo.classList.add("purple");

//     console.log (boxThree.classList.contains("coral"));

//     boxThree.classList.remove("coral");

// })






//setAttribute
// let inputEl = document.querySelector("input");

// boxOne.addEventListener("click",function(){
//     inputEl.setAttribute("type","button");
// })





//textContent
// boxOne.addEventListener("click",function(){
//     console.log(boxOne.textContent);
//     boxOne.textContent = "오늘은 금요일";
//     console.log(boxOne.textContent);
// })






//실습
let boxEl = document.querySelector(".box");
console.log(boxEl);

boxEl.addEventListener("click",function(){
    console.log (boxEl);

    if(boxEl.classList.contains("orange")){
        boxEl.classList.remove("orange");
        boxEl.classList.add("skyblue");
        console.log(boxEl);
    } else if (boxEl.classList.contains("skyblue")){
        boxEl.classList.remove("skyblue");
        boxEl.classList.add("orange");
        console.log(boxEl);
    }else{
        boxEl.classList.add("orange");
    }
});



let buttonOne = document.getElementById("button-1");

let buttonTwo = document.getElementById("button-2");

let inputEl = document.getElementById("input");

let spanEl = document.querySelector("span");

buttonOne.addEventListener("click",function(){
    inputEl.setAttribute("placeholder","아이디를 입력하세요");
    spanEl.textContent = "아이디를 입력하세요";
})

buttonTwo.addEventListener("click",function(){
    let inputText;
    inputText = inputEl.value;
    spanEl.textContent = inputText;
})