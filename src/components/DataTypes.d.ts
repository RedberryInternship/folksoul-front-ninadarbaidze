type InputProps = {
  labelName?: string;
  type?: string;
  register: any;
  fieldName: string;
  placeholder: string;
  isRequired?: boolean;
  minValue?: number;
  id?: string;
  patternValueMessage?: string;
  class?: string;
  pattern?: any;
  minMaxProps?: MinMaxInputProps;
};

type MinMaxInputProps = {
  min?: number;
  minMessage?: string;
  max?: number;
  maxMessage?: string;
};

export type TextareaField = {
  labelName?: string;
  register: any;
  fieldName: string;
  errorMessage?: string;
  id?: string;
  placeholder: string;
  class?: string;
  isRequired?: boolean;
  pattern?: any;
  patternValueMessage?: string;
};

export type OnClick = {
  onClick: () => void;
};

export type ClassName = {
  className?: string;
};

export type Children = {
  children: React.ReactNode;
};

export type ButtonText = {
  buttonText: string;
};

export type ChildrenClassesTypes = {
  children: React.ReactNode;
  className?: string;
};

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

export type DashboartNavs = {
  destination: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type AdminPanelWrapper = {
  children: React.ReactNode;
  header: string;
  className?: string;
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

export type DeleteModal = {
  setDeleteImageModalState: (boolean) => void;
  deleteMemberHandler: () => void;
  cancelDeleting: () => void;
};

export type ModalDataSocial = {
  id: props._id;
  name: props.name;
  url: props.url;
  setModalState: any;
};

export type Image = {
  image: string;
  memberId: string;
};

export type Socialmage = {
  image: string;
  socialId: string;
};

export type BandImage = {
  image: string;
  bandId: string;
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

export type ImageUploadBand = {
  _id: string;
  about: string;
  image: any;
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

export type LoginValueTypes = {
  username: string;
  password: string;
};

export type AddNewMember = {
  id: string;
  name: string;
  instrument: string;
  orbitLength: number | string;
  color: string;
  biography: string;
};

export type AddNewSocial = {
  id: string;
  name: string;
  url: string;
};

export type EditBandTypes = {
  about: any;
  id: string;
  name: string;
  url: string;
};

export type EditBand = {
  id: string;
  about: string;
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

type EditPhotoTypes = {
  className: string;
  onClick: () => void;
};

type Socials = {
  _id: string;
  name: string;
  url: string;
  image: any;
  fetchData: () => void;
};
