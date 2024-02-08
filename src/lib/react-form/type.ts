import { PropsWithChildren } from "react";
import {
  ChangeHandler,
  DefaultValues,
  FieldPath,
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  UseFormProps,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Schema } from "zod";

type GetInputPropsType = "input" | "select" | "checkbox" | "file" | "number";


export type GetInputProps<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  name: TFieldName,
  type?:GetInputPropsType,
) => {
  value?: any;
  onFocus?: (event: { target: any; type?: any }) => Promise<boolean | void>;
  onChange: (props: ChangeHandler | any) => Promise<void | boolean>;
  error: string | undefined;
} & UseFormRegisterReturn<TFieldName>;

export type ExtendedFormMethods<TFieldValues extends FieldValues> = {
  customMethod: () => void;
  getInputProps: GetInputProps<TFieldValues>;
  Form: ({ className, children }: FormComponent<TFieldValues>) => React.ReactNode;
  // Form: React.ForwardRefExoticComponent<FormComponent & React.RefAttributes<HTMLInputElement>>
  submitButtonRef: React.RefObject<HTMLInputElement>;
};
type AsyncDefaultValues<TFieldValues> = (
  payload?: unknown
) => Promise<TFieldValues>;

export type ExtendedFormProps<TFormValues extends FieldValues,TContext> = {
  onSubmit: SubmitHandler<TFormValues>;
  validationSchema?: Schema<TFormValues>;
  defaultValues: DefaultValues<TFormValues> | AsyncDefaultValues<TFormValues>;
} & UseFormProps<TFormValues, TContext>;

export interface FormComponent<TFormValues extends FieldValues> extends PropsWithChildren {
  className?: string;
  onSubmitHandler?: SubmitHandler<TFormValues>;
  validOn?:FieldPath<TFormValues> | FieldPath<TFormValues>[];
  id?: string
}


export interface BookingFormInitialValues {
  [key: string]: any;
}
export interface BookingFormField {
  index: number;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon: any;
  options?: string[];
  required?: boolean;
  min?: number;
  max?: number;
  conditional?: {
    field: string;
    value: any;
  };
  data?: BookingFormFieldsData;
}

export interface BookingFormFields {
  [key: string]: {
    type: string;
    fields: BookingFormField[];
    submitButton: { text: string; color: string };
  };
}

export interface BookingFormFieldsData {
  method: "POST" | "GET";
  url: string;
  entityName?: string;
  dataConverter?: (data: any) => void;
}
