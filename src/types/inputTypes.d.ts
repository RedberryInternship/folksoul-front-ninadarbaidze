import { RegisterOptions } from 'react-hook-form';

type InputProps = {
  labelName?: string;
  type?: string;
  register: UseFormRegister;
  fieldName: string;
  placeholder: string;
  isRequired?: boolean;
  minValue?: number;
  id?: string;
  class?: string;
  RegisterOptions?: RegisterOptions;
};

type formRulesObject = {
  value: number | string | RegExp;
  message: string;
};

export type TextareaField = {
  labelName?: string;
  register: UseFormRegister;
  fieldName: string;
  errorMessage?: string;
  id?: string;
  placeholder: string;
  class?: string;
  isRequired?: boolean;
  RegisterOptions?: RegisterOptions;
};
