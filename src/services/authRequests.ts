import { FolkSoulClient } from './axios.ts';

export const login = async (data: any): Promise<any> => {
  const response = await FolkSoulClient.post(`auth`, data);
  return response;
};
