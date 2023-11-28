import React from "react";

import { Checkbox, Fieldset, Select, TextInput, Textarea } from "@mantine/core";
import MultiCheckBox from "../multiCheckBox";
export type Field = {
  id: number;
  name: string;
  type: string;
  placeholder?: string;
  data?:string[];
  children?: Field[];
  index: number;
};

export const GenerateFormFields: React.FC<{ field: Field }> = ({ field }) => (
  <>
    {field?.type === "TextInput" && (
      <TextInput
        key={field.index}
        label={field?.name}
        placeholder={field?.placeholder ?? ""}
      />
    )}
    {field?.type === "Textarea" && (
      <Textarea
        key={field.index}
        label={field?.name}
        placeholder={field?.placeholder ?? ""}
      />
    )}
    {field?.type === "Select" && (
      <Select
        key={field.index}
        label={field?.name}
        placeholder={field?.placeholder ?? ""}
        data={field?.data ?? []}
      />
    )}
    {field?.type === "Checkbox" && (
      <MultiCheckBox key={field.index} label={field?.name} data={field?.data ?? []} onChange={(e)=>console.log(e)} />
    )}
    {field?.type === "RadioButton" && (
      <Checkbox key={field.index} label={field?.name} />
    )}
    {field?.children && (
      <Fieldset key={field.index} legend={field.name}>
        {field.children.map((child) => (
          <React.Fragment key={child.id}>
            <GenerateFormFields field={child} />
          </React.Fragment>
        ))}
      </Fieldset>
    )}
  </>
);
