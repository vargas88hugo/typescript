import axios from 'axios';

/**
 * This lesson I learn how to implement an
 * interface to catch errors
 */

const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed)
});

const logTodo = (id: number, title: string, completed: boolean) {
  console.log(`
    The todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
  `);
}