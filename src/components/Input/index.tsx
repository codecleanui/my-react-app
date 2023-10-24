import {
  TextInput,
  PasswordInput,
  Checkbox,
  Input,
} from "@mantine/core";
import { UseFormReturnType } from '@mantine/form';
import classes from './input.module.css'

export const CustomInput = <T extends object>({ id, form,type, ...props }: CustomInputProps<T>) => {
  switch (type) {
    case "TextInput":
      return (
        <TextInput {...form.getInputProps(id)} {...props} />
      );
    case "PasswordInput":
      return (
        <PasswordInput 
        {...form.getInputProps(id)} {...props}
        />
      );
    case "Checkbox":
      return (
        <Checkbox 
        {...form.getInputProps(id, { type: 'checkbox' })} {...props}
        />
      );
    default:
      return (
        <Input.Wrapper
          placeholder={props?.wrapperPlaceholder}
          label={props?.wrapperLabel}
          withAsterisk={props?.withAsterisk}
          description={props?.wrapperDescription}
          error={props?.errorDescription}
        >
          <Input 
            {...form.getInputProps(id)} {...props}
          />
        </Input.Wrapper>
      );
  }
};

interface CustomInputProps<T> {
  type?: string;
  id: keyof T;
  form: UseFormReturnType<T>;
  [key: string]: any;
}