import { Button, Flex, Text,Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export const ConfirmPrivacyPolicy = ({
  canRender,
  children,
}: {
  canRender: boolean;
  children: React.ReactElement;
}) => {
  const [opened, { close }] = useDisclosure(canRender);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {}}
        centered
        title="Privacy Policy"
        radius={7}
        shadow="xl"
        size="80%"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
            <Flex className=" items-center justify-center flex-col gap-4 rounded-md p-4">
              <Text>
                By clicking "Enter Site," you agree to abide by our terms of
                service and privacy policy. This website may use cookies to
                enhance your user experience.
              </Text>
              <Flex
                align={"center"}
                justify={"space-evenly"}
                direction={"row"}
                gap={20}
                maw={230}
              >
                <Button
                  onClick={() => {
                    localStorage.setItem("acceptPolicy", "Accept");
                    close();
                  }}
                >
                  Accept
                </Button>
                <Button
                  onClick={() => {
                    localStorage.setItem("acceptPolicy", "Accept");
                    close();
                  }}
                >
                  Decline
                </Button>
              </Flex>
            </Flex>
      </Modal>
      {!opened ? children : ""}
    </>
  );
};
