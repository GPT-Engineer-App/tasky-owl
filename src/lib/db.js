import { openDB } from 'idb';

const dbPromise = openDB('TodoApp', 1, {
  upgrade(db) {
    db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
  },
});

export async function getTodos() {
  const db = await dbPromise;
  return db.getAll('todos');
}

export async function addTodo(todo) {
  const db = await dbPromise;
  return db.add('todos', todo);
}

export async function updateTodo(todo) {
  const db = await dbPromise;
  return db.put('todos', todo);
}

export async function deleteTodo(id) {
  const db = await dbPromise;
  return db.delete('todos', id);
}
