// Todo object
const todo = {
    id: 2,
    body: 'Do something',
    completed: false,
    created_at: new Date(),
    deadline: new Date('2021-12-31'),
}

const rawTodosData = localStorage.getItem('todos')
let todos = rawTodosData ? JSON.parse(rawTodosData) : []

// CRUD Operations
const $list = document.getElementById('todos')

// Todo: Implement the following function HTML
const callOperations = async () => {
    const { fetchTodos, addTodo, updateTodo, deleteTodo } = await crudOperations()

    // const addedTodo = await akbank(todo)
    // const todos = await fetchTodos()
    // const updatedPost = await updateTodo(1, { completed: false })
    // const deletedTodoId = await deleteTodo(1)

    const [
        addedTodo,
        todos,
        updatedPost,
        deletedTodoId
    ] = await Promise.all([addTodo(todo), fetchTodos(), updateTodo(1, { completed: false }), deleteTodo(1)])

    // const [
    //     addedTodo,
    //     todos,
    //     updatedPost,
    //     deletedTodoId
    // ] = result

    // const addedTodo = result[0]
    // const todos = result[1]
}

function completedToDo(updatedId) {
    todos = todos.map(todo => {
        if (todo.id === updatedId) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }

        return todo
    })
}

// Ekleme
function addTodo() {
    const input = document.getElementById('todo-input')
    const body = input.value

    const newTodo = {
        id: todos.length + 1,
        body,
        completed: false,
        created_at: new Date(),
        deadline: new Date('2021-12-31'),
    }

    todos.push(newTodo)
    input.value = ''
    localStorage.setItem('todos', JSON.stringify(todos))
    getTodos()
}

// Silme
function deleteTodo(deletedTodoId) {
    todos = todos.filter(t => t.id !== deletedTodoId)
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Güncelleme
function updateTodo(updatedId, updatedTodo) {
    todos = todos.map(todo => {
        if (todo.id === updatedId) {
            return {
                ...todo,
                ...updatedTodo
            }
        }
        return todo
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Temizlmek
function clearTodos() {
    $list.innerHTML = ''
    todos = []
}

function createTodoElement(todo) {
    const $li = document.createElement('li')
    const $deleteButton = document.createElement('button')
    $deleteButton.innerText = 'Delete'

    const $bodyElement = document.createElement('p')

    const $updateButton = document.createElement('button')
    $updateButton.innerText = 'Update'

    $bodyElement.innerHTML = todo.body

    $li.appendChild($bodyElement)

    $li.innerHTML += `
        <p>${todo.completed ? 'Completed' : 'Not Completed'}</p>
    `

    $li.appendChild($deleteButton)
    $li.appendChild($updateButton)

    $deleteButton.addEventListener('click', () => {
        deleteTodo(todo.id)
        $li.remove()
    })

    $updateButton.addEventListener('click', () => {
       const body = prompt('Update todo')
       updateTodo(todo.id, { body })
       getTodos()
    })

    return $li
}

// Listeleme
function getTodos() {
    $list.innerHTML = ''

   todos.forEach(todo => {
       const $item = createTodoElement(todo)
        $list.appendChild($item)
   })
}

// Test
// const todo1 = {
//     id: 1,
//     body: 'Do something',
//     completed: false,
//     created_at: new Date(),
//     deadline: new Date('2021-12-31'),
// }

// const todo2 = {
//     id: 2,
//     body: 'Do something else',
//     completed: false,
//     created_at: new Date(),
//     deadline: new Date('2021-12-31'),
// }

// updateTodo(1, {
//     completed: true,
// })

getTodos()
