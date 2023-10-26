import { Flex, Tabs, Card } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

export default function TabsFormLayout({ children }: Props) {
  return (
    <Card
      p={0}
      styles={{
        borderRadius: "7px",
        padding: "0px 10px",
      }}
    >
      {/* <LoadingOverlay visible={isLoading} overlayBlur={1} /> */}
      <Tabs
        defaultValue="priority"
        orientation="vertical"
        variant="outline"
        styles={(theme) => ({
          tab: {
            ...theme.fn.focusStyles(),
            cursor: "pointer",
            fontSize: theme.fontSizes.md,
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            borderRadius: "0px",
            width: "300px",
            "&:not(:first-of-type)": {},

            "&:first-of-type": {
              // borderTopLeftRadius: theme.radius.md,
              // borderBottomLeftRadius: theme.radius.md,
            },

            "&:last-of-type": {
              // borderTopRightRadius: theme.radius.md,
              // borderBottomRightRadius: theme.radius.md,
            },

            "&[data-active]": {
              // borderLeft: '7px solid #3d692c',
              background: "#ffffff",
              marginLeft: "7px",
              color: "rgb(51, 50, 56)",
              borderRadius: "10px 0px 0px 10px",
              width: "277px",
              fontWeight: 500,
            },
          },

          tabIcon: {
            marginRight: theme.spacing.xs,
            display: "flex",
            alignItems: "center",
          },

          tabsList: {
            height: "600px",
            width: "284px",
            borderRadius: "14px",
            background: "#e8f1e5",
            padding: "20px 0px",
            color: "rgb(51, 50, 56)",
          },
          panel: {
            padding: "0px 40px",
            overflow: "hidden",
          },
          tabLabel: {
            padding: "3px 5px",
          },
        })}
      >
        <Tabs.List>
          <Tabs.Tab value="priority">Priority</Tabs.Tab>
          <Tabs.Tab value="regular">Regular</Tabs.Tab>
          <Tabs.Tab value="priority">Economy</Tabs.Tab>
          <Tabs.Tab value="regular">Expedited</Tabs.Tab>
        </Tabs.List>

        <Flex direction={"column"} w={"100%"}>
          <Flex justify={"end"}>
            <Flex gap={10}></Flex>
          </Flex>
          <Tabs.Panel value="priority">Priority</Tabs.Panel>
          <Tabs.Panel value="regular">Regular</Tabs.Panel>
          <Tabs.Panel value="priority">Economy</Tabs.Panel>
          <Tabs.Panel value="regular">Expedited</Tabs.Panel>
          <Flex justify={"end"}></Flex>
        </Flex>
      </Tabs>
    </Card>
  );
}
