import { Radio, Text } from "@mantine/core";
import React from "react";
interface MultiCheckBoxProps {
  data: string[];
  onChange: (value: string) => void;
  label: string;
  value?: any;
  direction?: "vertical" | "horizontal";
}
const MultiCheckBox: React.FC<MultiCheckBoxProps> = (props) => {

  return (
    <Radio.Group
      label={props.label}
      value={props.value}
      onChange={(value) => props.onChange(value)}
    >
      <div
        className={` flex items-center gap-5 mt-2 ${
          props.direction === "vertical" && "flex-col"
        }`}
      >
        {props.data.map((d, index) => (
          <div className={` flex items-center gap-1`}>
            <Radio label="" width={30} miw={20} key={index} value={d}/>
            <Text fz={"sm"}>{d}</Text>
          </div>
        ))}
      </div>
    </Radio.Group>
  );
};

export default MultiCheckBox;
