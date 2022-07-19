import { FolkSoulClient } from './axios.ts';
import { LoginValueTypes } from 'types';

export const login = async (data: LoginValueTypes): Promise<any> => {
  const response = await FolkSoulClient.post(`auth`, data);
  return response;
};
