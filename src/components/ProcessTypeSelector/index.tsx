import { Select } from "@mantine/core";

const selections = [
  {
    value: "priority",
    label: "Priority",
  },
  {
    value: "regular",
    label: "Regular",
  },
  {
    value: "economy",
    label: "Economy",
  },
  {
    value: "expedited",
    label: "Expedited",
  },
];

const ProcessTypeSelector = () => {
  return (
    <Select label="Select process type" placeholder="Select" data={selections} />
  );
};

export default ProcessTypeSelector;
