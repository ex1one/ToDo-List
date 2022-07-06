import { AxiosRequestConfig, AxiosResponse } from 'axios';
import instance from '../instance';
import { ITodo } from '../types/todos';

const fetchTodos = (config?: AxiosRequestConfig): Promise<AxiosResponse<ITodo[]>> => instance.get<ITodo[]>('/todos', {
  params: config?.params,
});

const todos = {
  fetchTodos,
};

export default todos;
