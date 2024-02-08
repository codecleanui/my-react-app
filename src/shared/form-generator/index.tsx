import React from "react";

import { Checkbox, Fieldset, Select, TextInput, Textarea } from "@mantine/core";
import MultiCheckBox from "../components/multiCheckBox";
import { GetInputProps } from "../../lib/react-form/type";
export type Field = {
  id: number;
  name: string;
  type: string;
  label:string
  placeholder?: string;
  data?: string[];
  children?: Field[];
  index: number;
};

export const GenerateFormFields: React.FC<{
  field: Field;
  getInputProps: GetInputProps<any>;
}> = ({ field, getInputProps }) => (
  <>
    {field?.type === "TextInput" && (
      <TextInput
        key={field.index}
        label={field?.label}
        placeholder={field?.placeholder ?? ""}
        {...getInputProps(field?.name)}
      />
    )}
    {field?.type === "Textarea" && (
      <Textarea
        key={field.index}
        label={field?.label}
        placeholder={field?.placeholder ?? ""}
        {...getInputProps(field?.name)}
      />
    )}
    {field?.type === "Select" && (
      <Select
        key={field.index}
        label={field?.label}
        placeholder={field?.placeholder ?? ""}
        data={field?.data ?? []}
        {...getInputProps(field?.name, "select")}
      />
    )}
    {field?.type === "Checkbox" && (
      <MultiCheckBox
        key={field.index}
        label={field?.label}
        data={field?.data ?? []}
        value={getInputProps(field?.name, "select").value}
        onChange={getInputProps(field?.name, "select").onChange}
      />
    )}
    {field?.type === "RadioButton" && (
      <Checkbox
        key={field.index}
        label={field?.label}
        {...getInputProps(field?.name, "checkbox")}
      />
    )}
    {field?.children && (
      <Fieldset key={field.index} legend={field.name}>
        {field.children.map((child) => (
          <React.Fragment key={child.id}>
            <GenerateFormFields field={child} getInputProps={getInputProps} />
          </React.Fragment>
        ))}
      </Fieldset>
    )}
  </>
);
