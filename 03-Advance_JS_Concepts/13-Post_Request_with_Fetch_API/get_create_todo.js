/* =====================================
Creating Post Request API with Fetch API
& getting data from JSONPlaceholder with
ID.
===================================== */


/* =====================================
DOM REFERENCES
===================================== */

// Creating Todo
const createTodoTitle = document.getElementById('todo-title'); // Getting Title Input
const createTodoBody = document.getElementById('todo-body'); // Getting Body Input
const createTodoBtn = document.getElementById('create-todo-btn'); // Getting Create Todo Button

const TodoShowCont = document.getElementsByClassName("show-create-todo-cont")[0]; // Getting Todo Show Container


// Getting Todo
const getTodoId = document.getElementById('todo-id'); // Getting Todo ID
const getTodoBtn = document.getElementById('get-todo-btn'); // Getting Get Todo Button

const TodoGetShowCont = document.getElementsByClassName("show-get-todo-cont")[0];



/* =====================================
Creating Post Request API with Fetch
API & logging data inside DOM.
===================================== */

// Creating Post Request
const createTodo = async (todo) => {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json()

    } catch (error) {
        console.error("Failed to create todo:", error);
    }
}

// Getting Todo
const passTodo = async (title, body) => {
    let newTodo = {
        'Title': `${title}`,
        'Description': `${body}`,
    }
    const result = await createTodo(newTodo);
    console.log(result);
}

// Creating HTML
const createTodoHTML = (titleValue, description) => {
    passTodo(titleValue, description);

    const divBox = document.createElement("div");
    divBox.classList.add("todo-box");
    divBox.innerHTML = `
    <h3 class="todo-title">${titleValue}</h3>
    <p class="todo-desp">${description}</p>
    `

    TodoShowCont.append(divBox);
}

// Taking Create Todo's Input
createTodoBtn.addEventListener("click", () => {
    if (createTodoTitle.value.trim() === "" || createTodoBody.value.trim() === "") {
        alert("Fill the input box");
        return;
    }

    createTodoHTML(createTodoTitle.value, createTodoBody.value);
})



/* =====================================
Getting Post Request API with Fetch
API & logging data inside DOM.
===================================== */

// Getting Post Request

const getTodo = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error("Failed to create todo:", error);
    }
}

const getTodoHTML = async (idNum) => {
    const getTodoData = await getTodo(idNum);

    const divBox = document.createElement("div");
    divBox.classList.add("todo-box");
    divBox.innerHTML = `
    <h3 class="todo-title">${getTodoData.title}</h3>
    <p class="todo-desp">${getTodoData.body}</p>
    `

    TodoGetShowCont.append(divBox);
}

// Taking Get Todo's Input
getTodoBtn.addEventListener("click", () => {
    if (getTodoId.value.trim() === "") {
        alert("Fill the input box");
        return;
    }

    getTodoHTML(getTodoId.value);
})



/* ======================================
Here is the page transition code
====================================== */

const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');

const firstPageBtn = document.getElementById('first-page-btn');
const secondPageBtn = document.getElementById('second-page-btn');

firstPageBtn.addEventListener("click", () => {
    firstPage.hidden = true;
    secondPage.hidden = false;
})

secondPageBtn.addEventListener("click", () => {
    firstPage.hidden = false;
    secondPage.hidden = true;
})