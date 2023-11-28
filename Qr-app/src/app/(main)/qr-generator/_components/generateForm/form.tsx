import React, { useState } from "react";
import {
  regionTable,
  locationTable,
  formTable,
  getFormById,
} from "../../../../../api";
import {
  Box,
  Button,
  Flex,
  Group,
  Select,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import {
  Field,
  GenerateFormFields,
} from "../../../../../shared/form-generator";
import DemoPaper from "../preview/demo-paper";
import { printComponent } from "../../../../../lib/react-pdf";
import styles from "./form.module.scss";

interface FormGeneratorProps {}

const FormGenerator: React.FC<FormGeneratorProps> = () => {
  const handlePrintComponent = async () => {
    await printComponent(<DemoPaper />);
    return;
  };

  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const handleRegionChange = (value: string | null) => {
    setSelectedRegion(Number(value));
  };

  const handleLocationChange = (value: string | null) => {
    setSelectedLocation(Number(value));
  };

  const generateFormFields = (field: Field) => (
    <GenerateFormFields key={field?.id} field={field} />
  );

  const generateForm = () => {
    if (selectedRegion !== null && selectedLocation !== null) {
      const formId = formTable.find(
        (form) =>
          form.regionId === selectedRegion &&
          form.locationId === selectedLocation
      )?.id;

      if (formId !== undefined) {
        const form = getFormById(formId);
        if (form) {
          return (
            <form className=" w-full">
              <Stack>{form.fields.map(generateFormFields)}</Stack>
            </form>
          );
        } else {
          return <p>No form found for the selected region and process type.</p>;
        }
      } else {
        return <p>No form found for the selected region and process type.</p>;
      }
    }
  };

  return (
    <div className={styles.root}>
      <Stack>
        <Group className={styles.headerFields}>
          <Select
            label="Region"
            placeholder="Select"
            data={regionTable.map((region) => ({
              value: region.id.toString(),
              label: region.name,
            }))}
            onChange={handleRegionChange}
          />
          <Select
            label="Location"
            placeholder="Select"
            data={locationTable.map((location) => ({
              value: location.id.toString(),
              label: location.name,
            }))}
            onChange={handleLocationChange}
          />
        </Group>
        <Group className={styles.formFields}>{generateForm()}</Group>
      </Stack>

      <Flex className={styles.footerFields}>
        <Box >
          <Textarea maw={"600px"} label="Comment" />
        </Box>
        <Flex justify={"end"} className="p-4 border-t">
          <Button maw={"100px"} onClick={handlePrintComponent}>
            Generate
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default FormGenerator;
