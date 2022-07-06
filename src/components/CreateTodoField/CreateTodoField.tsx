import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ToDoList from '../../store/todo/toDoList';
import Input from '../Input/Input';

const CreateTodoField: FC = () => {
  const [title, setTitle] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') ToDoList.addTodo(ToDoList.todos, title);
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
