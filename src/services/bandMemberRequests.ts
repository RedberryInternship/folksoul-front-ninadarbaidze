import axios from './axios.ts';
import { AxiosResponse } from 'axios';
import { AddNewMember, BandMemberData, BandMembersResponseTypes } from 'types';

export const getBandMembers = async (
  pageNumber: number
): Promise<AxiosResponse<BandMembersResponseTypes>> => {
  const response = await axios.get(`band-members?page=${pageNumber}`);
  console.log(response);
  return response;
};

export const getBandMembersWithoutPagination = async (): Promise<
  AxiosResponse<BandMemberData[]>
> => {
  const response = await axios.get(`band-members`);
  return response;
};

export const changeMemberAvatar = async (
  token: string,
  data: FormData
): Promise<FormData> => {
  const response = await axios.post(`change-avatar`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const editMember = async (
  token: string,
  id: string,
  data: AddNewMember
): Promise<AddNewMember> => {
  const response = await axios.patch(`edit-member/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
export const addMember = async (
  token: string,
  data: AddNewMember
): Promise<AddNewMember> => {
  const response = await axios.post(`new-member`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteMember = async (
  token: string,
  id: string
): Promise<string> => {
  const response = await axios.delete(`delete-member/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
