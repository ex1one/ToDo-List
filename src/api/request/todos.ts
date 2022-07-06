import { AxiosRequestConfig, AxiosResponse } from 'axios';
import instance from '../instance';
import { ITodo } from '../types/todos';

const fetchTodos = (config?: AxiosRequestConfig):
Promise<AxiosResponse<ITodo[]>> => instance.get<ITodo[]>('/todos', config);

const deleteTodos = (payload: number, config?: AxiosRequestConfig):
Promise<AxiosResponse<ITodo[]>> => instance.delete<ITodo[]>(`/todos/${payload}`, config);

const addTodos = (payload?: Omit<ITodo, 'id'>, config?: AxiosRequestConfig):
Promise<AxiosResponse<ITodo[]>> => instance.post<ITodo[]>('/todos', payload, config);

const todos = {
  fetchTodos,
  deleteTodos,
  addTodos,
};

export default todos;
