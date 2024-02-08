// FormContext.tsx
import React, { createContext, useContext, ReactNode, FC} from 'react';
import { FieldValues, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

// Define a generic type for form values
export interface TFormValues extends FieldValues {
  // You can extend FieldValues from react-hook-form for better compatibility
  [key: string]: any;
}

// Define types for the form context
interface FormContextProps<TFormValues extends FieldValues> extends UseFormReturn<TFormValues> {
}

// Create a context for the form
const FormContext = createContext<FormContextProps<TFormValues> | undefined>(undefined);
type UseFormContextProps<Values extends FieldValues> = () => FormContextProps<Values >

// Create a custom hook to use the form context
export const useFormContext:UseFormContextProps<TFormValues> = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

// Create a provider component for the form
interface FormProviderProps {
  children: ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
}

export const FormProvider: FC<FormProviderProps> = ({ children, onSubmit }) => {
  const methods = useForm<TFormValues>();

  const contextValue: FormContextProps<TFormValues> = {
    ...methods,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext.Provider>
  );
};
