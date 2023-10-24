import {
    Flex,
    Tabs,
    Card,
    Stack,
    TextInput,
    Select,
    NumberInput,
    Group,
    Checkbox,
    Divider,
    Button,
    SimpleGrid,
    Textarea,
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  
  import {
    IconAddressBook,
    IconDiscount,
    IconPhone,
    IconStar,
    IconTruckDelivery,
    IconUser,
  } from "@tabler/icons-react";
  const Page = () => {
    const form = useForm({
      initialValues: {
        email: "",
        termsOfService: false,
      },
    });
    // Create a function to handle the form submission
    const handleSubmit = (values: typeof form.values) => {
      console.log(values);
    };
  
    return (
      <Card p={0} className=" border-collapse py-[10px]">
        {/* <LoadingOverlay visible={isLoading} overlayBlur={1} /> */}
        <Tabs
          defaultValue="priority"
        >
          <Tabs.List className="mb-6">
            <Tabs.Tab value="priority">Priority</Tabs.Tab>
            <Tabs.Tab value="regular">Regular</Tabs.Tab>
            <Tabs.Tab value="economy">Economy</Tabs.Tab>
            <Tabs.Tab value="expedited">Expedited</Tabs.Tab>
          </Tabs.List>
  
          <Flex direction={"column"} w={"100%"}>
            <Flex justify={"end"}>
              <Flex gap={10}></Flex>
            </Flex>
            <Tabs.Panel value="priority">
                Priority
            </Tabs.Panel>
            <Tabs.Panel value="regular">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Card
                  withBorder
                  shadow={"md"}
                  className="p-8 shadow-lg "
                  variant="light"
                >
                  <Card.Section
                    inheritPadding
                    className="text-lg font-bold mb-2 p-3 shadow-md"
                    withBorder
                  >
                    User Details
                  </Card.Section>
  
                  <SimpleGrid
                    cols={{ base: 2, sm: 1, lg: 2 }}
                    spacing={{ base: 7, sm: 7 }}
                    verticalSpacing={{ base: 7, sm: 7 }}
                  >
                    <TextInput
                      leftSection={<IconUser size={"1rem"} />}
                      label="Name"
                      {...form.getInputProps(`requesterInformation.companyName`)}
                    />
                    <TextInput
                      leftSection={<IconAddressBook size={"1rem"} />}
                      label="Address"
                      {...form.getInputProps(`requesterInformation.companyName`)}
                    />
                    <TextInput
                      leftSection={<IconPhone size={"1rem"} />}
                      label="Phone Number"
                      {...form.getInputProps(`requesterInformation.companyName`)}
                    />
                  </SimpleGrid>
  
                  <Card.Section
                    inheritPadding
                    className="text-lg font-bold mb-2 p-3 mt-6 shadow-md"
                    variant="light"
                  >
                    Location Details
                  </Card.Section>
                  <Stack my={15}>
                    <TextInput
                      leftSection={<IconUser size={"1rem"} />}
                      label="Location"
                    />
                  </Stack>
                  <Stack my={15}>
                    <Checkbox label="Overnight pickup?" />
                  </Stack>
                  <Card.Section
                    inheritPadding
                    className="text-lg font-bold mb-2 p-3 mt-6 shadow-md"
                    variant="light"
                  >
                    Other
                  </Card.Section>
                  <Stack my={15}>
                    <TextInput
                      leftSection={<IconTruckDelivery size={"1rem"} />}
                      label="Delivery Id"
                    />
                  </Stack>
                  <Stack my={15}>
                    <TextInput
                      leftSection={<IconStar size={"1rem"} />}
                      label="Priority Id"
                    />{" "}
                  </Stack>
                  <Stack my={15}>
                    <Select
                      leftSection={<IconDiscount size={"1rem"} />}
                      label="Discount Id"
                      data={[
                        {
                          label: "Discount 1",
                          value: "d1",
                        },
                        {
                          label: "Discount 2",
                          value: "d2",
                        },
                        {
                          label: "Discount 3",
                          value: "d3",
                        },
                      ]}
                    />
                  </Stack>
                  <Stack my={15}>
                    <Textarea label="Additional Notes" />
                  </Stack>
                  <Flex justify={"end"} className="mt-6">
                    <Button type="submit">Generate</Button>
                  </Flex>
                </Card>
              </form>
            </Tabs.Panel>
            <Tabs.Panel value="economy">Economy</Tabs.Panel>
            <Tabs.Panel value="expedited">Expedited</Tabs.Panel>
          </Flex>
        </Tabs>
      </Card>
    );
  };
  export default Page;
  