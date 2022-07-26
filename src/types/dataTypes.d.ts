export type Data = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: ImageTypes[];
};

export type ContextData = {
  token: string;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  refreshMembers: () => void;
  refreshSocials: () => void;
  memberIsEdited: boolean;
  socialIsEdited: boolean;
  refreshBand: () => void;
  bandIsEdited: boolean;
};

export type ModalDataMembers = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: string;
  setModalState: (boolean) => void;
};

export type BandMembersResponseTypes = {
  bandMembers: BandMemberData[];
  total: number;
};

export type SocialsResponseTypes = {
  socials: SocialsTypes[];
  total: number;
};

export type ModalDataSocial = {
  id: props._id;
  name: props.name;
  url: props.url;
  setModalState: (boolean) => void;
};

export type ImageUploadData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: string;
  fetchData: () => void;
  setImageModalState: (boolean) => void;
};
export type ImageUploadDataSocials = {
  _id: string;
  name: string;
  url: string;
  image: string;
  fetchData: () => void;
  setImageModalState: (boolean) => void;
};

export type MemberData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: string;
  fetchData: () => void;
  data: BandMemberData[];
  setPageNumber: (number) => void;
  pageNumber: number;
};

export type BandMemberData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: string;
};

type SocialsTypes = {
  _id: string;
  name: string;
  url: string;
  image: string;
};
type AboutBandTypes = {
  _id: string;
  about: string;
  image: string;
};

export type BandMemberTypes = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: string;
};

type CirclesTypes = {
  id: string;
  size: number;
  setIsSpinning: (boolean) => void;
  isSpinning: boolean;
  duration: number;
  padding?: string;
  memberName: string;
  memberImage: string;
  memberColor: string;
  onClick: () => void;
  setMemberIsSelected: (boolean) => void;
  memberIsSelected: boolean;
};

type Socials = {
  _id: string;
  name: string;
  url: string;
  image: string;
  fetchData: () => void;
  data: SocialsTypes[];
  setPageNumber: (number) => void;
  pageNumber: number;
};
