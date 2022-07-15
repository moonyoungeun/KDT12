// const form = document.querySelector("#todo-form");
// console.log(form);

// console.log(document.querySelectorAll("item"));

// const items = document.querySelectorAll(".item");
// items.forEach((item)=>{
//     console.log(item)
// })

let todos = document.querySelector("#todo-list");
// console.log(todos);
// todos.lastElementChild.remove();
// todos.firstElementChild.textContent = "hello";

let button = document.querySelector(".submit");

let msg = document.querySelector("#msg");

button.addEventListener("click",function(e){
    e.preventDefault();

    if(todoInput.value === ""){
        msg.style.display = "block";
        setTimeout(()=>msg.style.display = "none" , 2000)
        return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = "";
    e.target.style.color = "rgb(29, 63, 65)";
    console.log("clicked!!")
});

let todoInput = document.querySelector("#todo-input");

// function onSubmit(e){
//     e.preventDefault
// }