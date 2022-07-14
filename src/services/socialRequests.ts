import { FolkSoulClient } from './axios.ts';

export const getSocialMediaWithPagination = async (
  pageNumber: number
): Promise<any> => {
  const response = await FolkSoulClient.get(`social-media?page=${pageNumber}`);
  return response;
};

export const getSocialMediaLinks = async (): Promise<any> => {
  const response = await FolkSoulClient.get(`social-media`);
  return response;
};

export const editSocial = async (
  token: string,
  id: string,
  data: any
): Promise<any> => {
  const response = await FolkSoulClient.patch(`edit-social/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const addSocial = async (token: string, data: any): Promise<any> => {
  const response = await FolkSoulClient.post(`add-social`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const changeSocialLogo = async (
  token: string,
  data: any
): Promise<any> => {
  const response = await FolkSoulClient.post(`change-social-icon`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteSocial = async (token: string, id: string): Promise<any> => {
  const response = await FolkSoulClient.delete(`delete-social/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
