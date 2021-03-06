import React, { FC } from 'react';
import { BsTrash } from 'react-icons/bs';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import Check from '../Check/Check';
import ToDoList from '../../store/todo/toDoList';
import { ITodo } from '../../api/types/todos';

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => (
  <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
    <button type="submit" className="flex items-center" onClick={() => ToDoList.completeTodo(todo.id)}>
      <Check isCompleted={todo.completed} />
      <span
        className={cn({
          'line-through': todo.completed,
        })}
      >
        {todo.title}
      </span>
    </button>
    <button type="button" onClick={() => ToDoList.removeTodo(todo.id)}>
      <BsTrash
        size={22}
        className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
      />
    </button>
  </div>
);

export default observer(TodoItem);
