import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CreateTodoField from '../CreateTodoField/CreateTodoField';
import API from '../../api';
import ToDoList from '../../store/todo/toDoList';
import TodoItem from '../TodoItem/TodoItem';
import { useTodos } from '../../hooks/useSortedTodos';
import Sort from '../Sort/Sort';
import Search from '../Search/Search';

const Home = () => {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const { query, sort } = filter;
  const sortedTodos = useTodos(ToDoList.todos, sort, query);

  useEffect(() => {
    API.todos.fetchTodos()
      .then(({ data }) => {
        ToDoList.todos = data;
        localStorage.setItem('todos', JSON.stringify(data));
      });
  }, []);

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo</h1>
      <Sort setFilter={setFilter} />
      <Search setFilter={setFilter} />
      {sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      <CreateTodoField />
    </div>
  );
};

export default observer(Home);
