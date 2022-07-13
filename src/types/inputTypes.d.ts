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
