import { FolkSoulClient } from './axios.ts';

export const getBandMemebrs = async (pageNumber: number): Promise<any> => {
  const response = await FolkSoulClient.get(`band-members?page=${pageNumber}`);
  return response;
};

export const getBandMemebrsWithoutPagination = async (): Promise<any> => {
  const response = await FolkSoulClient.get(`band-members`);
  return response;
};

export const changeMemberAvatar = async (
  token: string,
  data: any
): Promise<any> => {
  const response = await FolkSoulClient.post(`change-avatar`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
export const editMember = async (
  token: string,
  id: string,
  data: any
): Promise<any> => {
  const response = await FolkSoulClient.patch(`edit-member/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
export const addMember = async (token: string, data: any): Promise<any> => {
  const response = await FolkSoulClient.post(`new-member`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteMember = async (token: string, id: string): Promise<any> => {
  const response = await FolkSoulClient.delete(`delete-member/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
