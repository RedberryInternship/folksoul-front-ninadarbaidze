type InputProps = {
  labelName?: string;
  type?: string;
  register: any;
  fieldName: string;
  placeholder: string;
  isRequired?: boolean;
  requiredMessage?: string;
  minValue?: number;
  minValueMessage?: string;
  errorMessage?: string;
  id?: string;
  patternValueMessage?: string;
  classes?: string;
  callBack?: () => void;
  callBackMessage?: string;
  class?: string;
  isValidInput?: Boolean;
  pass?: string;
  repeatPass?: string;
  error?: any;
  pattern?: any;
  isNum?: boolean;
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
  memberIsEdited: boolean;
};

export type DashboartNavs = {
  destination: string;
  children: React.ReactNode;
};

type AdminPanelWrapper = {
  children: React.ReactNode;
  header: string;
};

export type ModalData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: any;
  setModalState: any;
};

export type Image = {
  image: string;
  memberId: string;
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

export type MemberData = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  image: any;
  fetchData: () => void;
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
