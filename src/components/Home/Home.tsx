import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CreateTodoField from '../CreateTodoField/CreateTodoField';
import API from '../../api';
import ToDoList from '../../store/todo/toDoList';
import TodoItem from '../TodoItem/TodoItem';

const Home = () => {
  useEffect(() => {
    API.todos.fetchTodos()
      .then(({ data }) => ToDoList.todos = data);
  }, []);

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo</h1>
      {ToDoList.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      <CreateTodoField />
    </div>
  );
};

export default observer(Home);
