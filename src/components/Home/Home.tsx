import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CreateTodoField from '../CreateTodoField/CreateTodoField';
import ToDoList from '../../store/todo/toDoList';
import TodoItem from '../TodoItem/TodoItem';
import Sort from '../Sort/Sort';
import Search from '../Search/Search';
import API from '../../api';
import { IParams } from '../../api/types/params';

const Home = () => {
  const [params, setParams] = useState<IParams>({
    _page: 1,
    _limit: 8,
  });

  useEffect(() => {
    API.todos.fetchTodos({ params })
      .then(({ data }) => {
        ToDoList.todos = data;
        localStorage.setItem('todos', JSON.stringify(data));
      });
  }, [params]);

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo</h1>
      <Sort setParams={setParams} />
      <Search setParams={setParams} />
      {ToDoList.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      <CreateTodoField />
    </div>
  );
};

export default observer(Home);
