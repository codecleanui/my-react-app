import { Checkbox, Flex, Group,Text } from '@mantine/core';
import React from 'react';
interface MultiCheckBoxProps {
  data: string[];
  onChange?: (value: string) => void;
  [key: string]: any;
}
const MultiCheckBox: React.FC<MultiCheckBoxProps> = ({ data, ...props }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

  const handleCheckboxChange = (value: string) => {
    props.onChange&&props.onChange(value);
    setSelectedValue(value === selectedValue ? null : value);
  };
  return (
    <Flex  className='flex-col gap-1'>
     <Text size='sm' fw={500}>{props.label}</Text>
     <Group >
     {data.map((d, index) => (
      <Checkbox  key={index} value={d} label={d} checked={d === selectedValue}
      onChange={() => handleCheckboxChange(d)}/>
    ))}
     </Group>
  </Flex>
  );
};

export default MultiCheckBox;


