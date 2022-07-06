import { useMemo } from 'react';
import { ITodo } from '../api/types/todos';

export const useSortedTodos = (todos: ITodo[], sort: string): ITodo[] => {
  const sortedTodos = useMemo(() => {
    if (sort === 'unfulfilled') {
      return [...todos].filter((todo) => !todo.completed);
    } if (sort === 'completed') {
      return [...todos].filter((todo) => todo.completed);
    }
    return todos;
  }, [sort, todos]);
  return sortedTodos;
};

export const useTodos = (todos: ITodo[], sort: string, query: string): ITodo[] => {
  const sortedTodos = useSortedTodos(todos, sort);

  return useMemo(
    () => sortedTodos.filter((todo) => todo.title.toLowerCase()
      .includes(query.toLowerCase())),
    [query, sortedTodos],
  );
};
