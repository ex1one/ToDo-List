import instance from './instance';

instance.interceptors.request.use((config) => ({ ...config }));
