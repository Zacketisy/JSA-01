//  -Local storage: 
// + setItem
// + setItem
// + length
// + removeItem

const form = document.getElementById
    ("form");
const input = document.getElementById
    ("input");
const button = document.getElementById
    ("button");
const todo = document.getElementById
    ("todo");

let todolist = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = input.value;
    if (newTodo) {
        todolist.push({
            text: newTodo,
            complete: false
        });
        localStorage.setItem("todos", JSON.stringify(todolist));
        document.getElementById("input").value = null;
    }
    else {
        alert("Tasks Error !!!");
    }

    render();

});
const render = () => {
    todo.innerHTML = null;
    todolist = JSON.parse(localStorage.getItem ("todos")) || [];

    for ( let i = 0; i  < todolist.length ;
        i++) {
            let li = document.createElement("li");
            todo.appendChild(li);
            li.innerHTML = todolist[i].text;

            let div = document.createElement("div");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            
            div.appendChild(checkbox);
            li.appendChild(div)

            let btn = document.createElement("button");
            let text = document.createTextNode("X");
            btn.classList.add("deleteBtn");
            btn.appendChild(text);
            div.appendChild(btn);

            checkbox.addEventListener("click", (event) =>{
                todolist[i].complete = event.target.checked;

                if (todolist[i].complete) {
                    li.classList.add("completed");
                    li.classList.remove("uncompleted");
                    checkbox.checked = todolist[i].complete;

                } else  {
                    li.classList.add("completed");
                    li.classList.remove("uncompleted");
                    checkbox.checked = todolist[i].complete;
                }
            })
        }
}