import React, { useState } from "react";
import { regionTable, formTable, getFormById } from "../../../../../api";
import {
  Alert,
  Box,
  Button,
  Flex,
  Modal,
  Select,
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
import useExtendedForm from "../../../../../lib/react-form/useExtendedForm";
import CardLayout from "../../../../../shared/components/card-layout/card-layout";
import { IconInfoCircle } from "@tabler/icons-react";
const initialValues:FormValues = {
  agentId: "",
  location: "",
  customerType: "",
  on: "",
  dv: "",
  ev: "",
  reclaim: "",
  memberId: "",
  type: "",
  voucher: "",
  partial: "",
  region:null,
};
interface FormGeneratorProps {}
export type FormValues = {
  agentId: string;
  customerType: string;
  dv: string;
  ev: string;
  location: string;
  memberId: string;
  on: string;
  reclaim: string;
  type: string;
  voucher: string;
  region: number | null;
  partial: string
};
const FormGenerator: React.FC<FormGeneratorProps> = () => {
  const {
    handleSubmit,
    customMethod: handlePrintComponent,
    getInputProps,
    watch,
    reset,
  } = useExtendedForm<FormValues>({
    defaultValues:initialValues,
    onSubmit: async (data: any) => {
      const selectedRegion = data.region ?? null;
      if (selectedRegion) {
        setModalView(true);
      } else {
        setAlertView(true);
      }
      console.log("Form submitted with data:", data);
      // Add any additional logic you need on form submit
    },
  });
  const [modalView, setModalView] = useState(false);
  const [alertView, setAlertView] = useState(false);

  const handleOpenModal = async () => {
    await printComponent(<DemoPaper data={watch()} />);
  };

  const generateForm = () => {
    const selectedRegion = watch().region ?? null;
    if (watch().region !== null) {
      const formId = formTable.find(
        (form) => form.regionId === selectedRegion
      )?.id;

      if (formId !== undefined) {
        const form = getFormById(formId);
        if (form) {
          return (
            <form
              className="form-wrapper "
              onSubmit={handleSubmit(console.log)}
            >
              {form.fields.map((field, index) => (
                <GenerateFormFields
                  key={index}
                  field={field}
                  getInputProps={getInputProps}
                />
              ))}
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
    <div>
      <Modal
        opened={modalView}
        onClose={() => setModalView(false)}
        size={"auto"}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        title="Generate"

      >
        <DemoPaper data={watch()} />
        <Flex gap={10} justify={"end"} mt={20}>
          <Button onClick={() => setModalView(false)}>Cancel</Button>
          <Button variant="outline" onClick={handleOpenModal}>
            Print
          </Button>
        </Flex>
      </Modal>

      <CardLayout
        header={
          <Flex className={styles.headerFields}>
            <Flex className="gap-4">
              <Select
                label="Region"
                placeholder="Select"
                data={regionTable.map((region) => ({
                  value: region.id.toString(),
                  label: region.name,
                }))}
                {...getInputProps("region", "select")}
                onChange={(value) =>
                  getInputProps("region", "select").onChange(Number(value))
                }
              />
              <Select
                label="Location"
                placeholder="Select"
                data={[
                  "New York, NY 55311",
                  "Edmond Av, Seattle WA 99120",
                  "5012 Seminary Rd, Miami Fl 33103",
                ]}
                {...getInputProps("location", "select")}
              />
            </Flex>
            <Box>
              <Alert
                variant="light"
                color="red"
                title="Invalid request"
                icon={<IconInfoCircle size={18} />}
                hidden={!alertView}
              >
                <Text fz={12} fw={600}>
                  Please Fill the form before you Generate
                </Text>
              </Alert>
            </Box>
          </Flex>
        }
        footer={
          <Flex className={styles.footerFields}>
            <Box>
              <Textarea maw={"600px"} label="Comment" rows={5} />
            </Box>
            <Flex justify={"end"} className="p-4 border-t">
              <Button maw={"100px"} onClick={handlePrintComponent}>
                Generate
              </Button>
            </Flex>
          </Flex>
        }
        className="w-full"
        withBorder
        shadow="sm"
      >
        <Box className=" h-full min-h-[200px]">{generateForm()}</Box>
      </CardLayout>
    </div>
  );
};

export default FormGenerator;
