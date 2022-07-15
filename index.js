// const pororo = {
//     height : 70,
//     weight : 50,
//     gender:"none",
//     say(){
//         console.log("뽀로로가 말을 합니다.")
//     },
//     name(){
//         console.log("뽀로로")
//     },
//     showHeight(){
//         console.log(this.height)}
// }

// function showHeight(){
//     console.log(pororo.height);
// }

// pororo.showHeight();



// pororo.say();

// for(key in pororo){
//     console.log(key, pororo[key]);}



// }

// let boy = {
//     name : "justin",
//     sayHello

// }

// let girl = {
//     name : "Anna",
//     sayHello
// }

// boy.sayHello();
// girl.sayHello();



// function Fruits(name,price){
//     this.name = name;
//     this.price = price;
//     this.showPrice = function(){
//         console.log(`${this.name}의 가격은 ${this.price}입니다!`);
//     }
// }

// let orange = new Fruits("오렌지",3000);
// let dragonFruits = new Fruits("용과",2500);
// let banana = new Fruits("바나나",2000);
// let pineApple = new Fruits("파인애플",5000);

// orange.showPrice();
// dragonFruits.showPrice();
// banana.showPrice();
// pineApple.showPrice();


function KDT(name,gender){
    this.name = name;
    this.gender = gender;
    this.showNg = function(){
        console.log(`${this.name}는${this.gender}입니다`);
    }
}

let person = new KDT("진형","W");
let person1 = new KDT("소민","W");
let person2 = new KDT("지훈","M");
let person3 = new KDT("의진","W");

person.showNg();
person1.showNg();
person2.showNg();
person3.showNg();