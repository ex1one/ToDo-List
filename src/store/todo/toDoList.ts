import { makeAutoObservable } from 'mobx';
import { ITodo } from '../../api/types/todos';

class TodoList {
  todos: ITodo[] = [];

  isLoading = false;

  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todos: ITodo[], title: string) {
    const todo: ITodo = {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      title,
      completed: false,
    };
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }
}

export default new TodoList();
