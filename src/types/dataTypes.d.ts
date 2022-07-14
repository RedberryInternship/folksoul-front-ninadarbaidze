export type Data = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
};

export type ContextData = {
  token: any;
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
  image: any;
  setModalState: any;
};

export type ModalDataSocial = {
  id: props._id;
  name: props.name;
  url: props.url;
  setModalState: any;
};

export type ImageUploadData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: any;
  fetchData: () => void;
  setImageModalState: any;
};
export type ImageUploadDataSocials = {
  _id: string;
  name: string;
  url: string;
  image: any;
  fetchData: () => void;
  setImageModalState: any;
};

export type MemberData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: any;
  fetchData: () => void;
  data: BandMemberData[];
  setPageNumber: any;
  pageNumber: number;
};

export type BandMemberData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: Image[];
};

type SocialsTypes = {
  _id: string;
  name: string;
  url: string;
  image: any;
};
type AboutBandTypes = {
  _id: string;
  about: string;
  image: any;
};

export type BandMemberTypes = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: any;
};

type CirclesTypes = {
  size: number;
  setIsSpinning: any;
  isSpinning: boolean;
  duration: number;
  padding?: string;
  memberName: string;
  memberImage: string;
  memberColor: string;
  onClick: any;
  setMemberIsSelected: any;
  memberIsSelected: boolean;
};

type Socials = {
  _id: string;
  name: string;
  url: string;
  image: any;
  fetchData: () => void;
  data: any;
  setPageNumber: any;
  pageNumber: number;
};
