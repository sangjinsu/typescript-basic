interface Todo {
  id: number
  title: string
  done: boolean
}

let todoItems: Todo[]

function fetchTodoItems(): Todo[] {
  const todos: Todo[] = [
    { id: 1, title: '클린 코드', done: false },
    { id: 2, title: '클린 아키텍트', done: false },
    { id: 3, title: '인사이드 자바스크립트', done: false },
  ]
  return todos
}

function fetchtodos(): Todo[] {
  const todos = fetchTodoItems()
  return todos
}

function addTodo(todo: Todo): void {
  todoItems.push(todo)
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1)
}

function compleateTodo(index: number, todo: Todo): void {
  todo.done = true
  todoItems.splice(index, 1, todo)
}

function logFirstTodo(): Todo {
  return todoItems[0]
}

function showCompelted(): Todo[] {
  return todoItems.filter((todoItem) => todoItem.done)
}

function addTwoTodoItems(todo1: Todo, todo2: Todo) {
  addTodo(todo1)
  addTodo(todo2)
}

function log(): void {
  console.log(todoItems)
}
