import { AxiosResponse } from 'axios';
import { SocialsResponseTypes, SocialsTypes, AddNewSocial } from 'types';
import axios from './axios.ts';

export const getSocialMediaWithPagination = async (
  pageNumber: number
): Promise<AxiosResponse<SocialsResponseTypes>> => {
  const response = await axios.get(`social-media?page=${pageNumber}`);
  return response;
};

export const getSocialMediaLinks = async (): Promise<
  AxiosResponse<SocialsTypes[]>
> => {
  const response = await axios.get(`social-media`);
  return response;
};

export const editSocial = async (
  token: string,
  id: string,
  data: AddNewSocial
): Promise<AddNewSocial> => {
  const response = await axios.patch(`edit-social/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const addSocial = async (
  token: string,
  data: AddNewSocial
): Promise<AddNewSocial> => {
  const response = await axios.post(`add-social`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const changeSocialLogo = async (
  token: string,
  data: FormData
): Promise<FormData> => {
  const response = await axios.post(`change-social-icon`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteSocial = async (
  token: string,
  id: string
): Promise<string> => {
  const response = await axios.delete(`delete-social/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
