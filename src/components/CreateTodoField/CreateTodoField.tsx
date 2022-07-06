import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Input from '../Input/Input';
import API from '../../api';
import { ITodo } from '../../api/types/todos';
import ToDoList from '../../store/todo/toDoList';

const CreateTodoField: FC = () => {
  const [newTodo, setNewTodo] = useState<Omit<ITodo, 'id'> | null>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo((prev) => (
      {
        ...prev,
        title: event.target.value,
        completed: false,
        userId: 1,
      }));
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newTodo) {
      API.todos.addTodos(newTodo);
      ToDoList.addTodo(ToDoList.todos, newTodo.title);
    }
  };

  return (
    <Input
      type="text"
      placeholder="Add a task"
      onChange={changeHandler}
      onKeyPress={onKeyPress}
    />
  );
};

export default observer(CreateTodoField);
