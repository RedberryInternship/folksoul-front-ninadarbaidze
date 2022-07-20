import { AxiosResponse } from 'axios';
import { AboutBandTypes, EditBandTypes } from 'types';
import axios from './axios.ts';

export const changeBandLogo = async (
  token: string,
  data: FormData
): Promise<FormData> => {
  const response = await axios.post(`change-band-logo`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const getAboutBandInfo = async (): Promise<
  AxiosResponse<AboutBandTypes>
> => {
  const response = await axios.get(`bands`);
  return response;
};

export const editBand = async (
  token: string,
  id: string,
  data: EditBandTypes
): Promise<EditBandTypes> => {
  const response = await axios.patch(`edit-band/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
