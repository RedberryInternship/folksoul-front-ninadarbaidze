export type inputProps = {
  labelName: string;
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
  editedMemberHandler: () => void;
  memberIsEdited: boolean;
};

export type DashboartNavs = {
  destination: string;
  children: React.ReactNode;
};
