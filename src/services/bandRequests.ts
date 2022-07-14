import { FolkSoulClient } from './axios.ts';

export const changeBandLogo = async (
  token: string,
  data: any
): Promise<any> => {
  const response = await FolkSoulClient.post(`change-band-logo`, data, {
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
