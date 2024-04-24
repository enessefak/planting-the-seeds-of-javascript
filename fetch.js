// https://my-json-server.typicode.com/

// db.json
// {
//     "todos": [
//       {
//         "id": 1,
//         "body": "Post 1",
//         "completed": true,
//         "created_at": "Wed Apr 24 2024 18:45:11 GMT+0300 (GMT+03:00)",
//         "deadline": "Wed Apr 24 2024 18:45:11 GMT+0300 (GMT+03:00)"
//       }
//     ]
//   }

const githubUser = 'enessefak';

const crudOperations = async () => {
    async function fetchTodos() {
        const response = await fetch(`https://my-json-server.typicode.com/${githubUser}/todo/todos`);
        const todos = await response.json();
        return todos;
    }
    
    async function addTodo(todo) {
        const response = await fetch("https://my-json-server.typicode.com/${githubUser}/todo/todos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        const result = await response.json();
        return result;
    }
    
    async function updateTodo(todoId, updatedData) {
        const response = await fetch(`https://my-json-server.typicode.com/${githubUser}/todo/todos/${todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        const result = await response.json();
        return result;
    }

    async function deleteTodo(todoId) {
        const response = await fetch(`https://my-json-server.typicode.com/${githubUser}/todo/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    }

    return { fetchTodos, addTodo, updateTodo, deleteTodo }
}