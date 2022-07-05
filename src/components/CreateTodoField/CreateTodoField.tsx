import React, { FC, useState } from 'react';
import ToDoList from '../../store/todo/toDoList';

const CreateTodoField: FC = () => {
  const [title, setTitle] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20">
      <input
        type="text"
        onChange={changeHandler}
        onKeyPress={(e) => e.key === 'Enter' && ToDoList.addTodo(ToDoList.todos, title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};

export default CreateTodoField;
