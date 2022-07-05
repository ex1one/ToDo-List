import { AxiosResponse } from 'axios';
import instance from '../instance';
import { ITodo } from '../types/todos';

const fetchTodos = (limit = 8, page = 1): Promise<AxiosResponse<ITodo[]>> => instance.get<ITodo[]>('/todos', {
  params: {
    _limit: limit,
    _page: page,
  },
});

const todos = {
  fetchTodos,
};

export default todos;
