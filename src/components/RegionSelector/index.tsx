import { Select } from "@mantine/core";

const selections = [
  {
    value: "central",
    label: "Central",
  },
  {
    value: "north-east",
    label: "North-East",
  },
  {
    value: "north-west",
    label: "North-West",
  },
  {
    value: "south",
    label: "South",
  },
];

const RegionSelector = () => {
  return (
    <Select label="Select Region" placeholder="Select" data={selections} />
  );
};

export default RegionSelector;
