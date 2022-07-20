import { FolkSoulClient } from './axios.ts';
import { LoginValueTypes, TokenType } from 'types';
import { AxiosResponse } from 'axios';

export const login = async (
  data: LoginValueTypes
): Promise<AxiosResponse<TokenType>> => {
  const response = await FolkSoulClient.post(`auth`, data);
  return response;
};
