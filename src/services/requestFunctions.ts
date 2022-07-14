import { FolkSoulClient } from './axios.ts';

export const login = async (data: any): Promise<any> => {
  const response = await FolkSoulClient.post(`auth`, data);
  return response;
};

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

export const changeBandLogo = async (
  token: string,
  data: any
): Promise<any> => {
  const response = await FolkSoulClient.post(`change-band-logo`, data, {
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

export const getAboutBandInfo = async (): Promise<any> => {
  const response = await FolkSoulClient.get(`bands`);
  return response;
};

export const editBand = async (
  token: string,
  id: string,
  data: any
): Promise<any> => {
  const response = await FolkSoulClient.patch(`edit-band/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

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
