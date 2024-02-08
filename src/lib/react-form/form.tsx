import type { Schema } from 'zod';
import { useEffect } from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
  FieldValues,
  UseFormRegisterReturn,
  ChangeHandler,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type ServerErrors<T> = {
  [Property in keyof T]: string;
};
type GetInputPropsType = 'input' | 'select' | 'checkbox' | 'file' | 'number';

type GetInputProps<Values> = (
  path: any,
  type?: GetInputPropsType,
) => {
  value?: any;
  onFocus: (event: { target: any; type?: any }) => Promise<boolean | void>;
  onChange: (props: ChangeHandler | any) => Promise<void | boolean>;
  error: string | undefined;
} & UseFormRegisterReturn<any>;

type FormChildrenProps<TFormValues extends FieldValues> = {
  getInputProps?: GetInputProps<TFormValues>;
  onRequestSubmit?: SubmitHandler<TFormValues>; // Add onRequestSubmit callback
} & UseFormReturn<TFormValues>;

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: FormChildrenProps<TFormValues>) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: Schema<TFormValues>;
  fieldErrors?: any[] | null;
  formError?: string | string[] | null | any;
  serverError?: ServerErrors<Partial<TFormValues>> | null;
  resetValues?: any | null;
  className?: string;
};

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>,
>({
  onSubmit,
  children,
  useFormProps,
  validationSchema,
  fieldErrors,
  formError,
  resetValues,
  className,
  ...formProps
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...useFormProps,
    ...(validationSchema && { resolver: zodResolver(validationSchema) }),
  });

  useEffect(() => {
    if (resetValues) {
      methods.reset(resetValues);
    }
  }, [resetValues, methods]);

  const getInputProps: GetInputProps<TFormValues> = (path, type) => {
    const fieldRegister = methods.register(path);
    const fieldState = methods.getFieldState(path, methods.formState);
    return {
      ...fieldRegister,
      ...(type === 'select' ? { value: methods.getValues(path) } : {}),
      ...(type === 'number' ? { value: methods.getValues(path) } : {}),

      onBlur: async (event: {
        target: any;
        type?: any;
      }): Promise<boolean | void> => {
        methods.trigger(path);
        return await fieldRegister.onBlur(event);
      },
      onFocus: async (event: {
        target: any;
        type?: any;
      }): Promise<boolean | void> => {
        methods.clearErrors(path);
        return await fieldRegister.onBlur(event);
      },
      onChange:
        type === 'select' || type === 'file' || type === 'number'
          ? async (e) => await methods.setValue(path, e)
          : fieldRegister.onChange,
      error: fieldState.error?.message,
    };
  };

  const fromMethods = { ...methods, getInputProps };
  console.log(methods.watch());
  return (
    <form
      noValidate
      onSubmit={methods.handleSubmit(onSubmit)}
      {...formProps}
      className={className}
    >
      {children(fromMethods)}
    </form>
  );
};
