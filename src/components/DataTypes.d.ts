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
