import React from "react";
import GenerateBarCode from "../../../../../lib/react-barcode";
import style from "./demo-paper.module.scss";
import { Flex, Group, SimpleGrid, Text, camelToKebabCase } from "@mantine/core";
import { FormValues } from "../generateForm/form";

const DemoPaper: React.FC<{ data: FormValues }> = ({ data }) => {
  const date = new Date();
  return (
    <div className={style.letterRoot}>
      <div className={style.letterWrapper}>
        <div className={style.letterHeader}>
          <Flex className="w-[100%] items-center">
            <SimpleGrid cols={{ base: 2 }}>
              <Group gap={6} maw={258}>
                <Text fz={13} fw={700} truncate ta={"left"} miw={80} maw={100}>
                  Created Date:
                </Text>
                <Text fz={13} truncate maw={150} fw={600}>
                  {date.toISOString()}
                </Text>
              </Group>
              <Group gap={6} maw={258}>
                <Text fz={13} fw={700} truncate ta={"left"} miw={30} maw={100}>
                  Type:
                </Text>
                <Text fz={13} truncate maw={150} fw={600}>
                  {data.agentId}
                </Text>
              </Group>

              <Group gap={6} maw={258}>
                <Text fz={13} fw={700} truncate ta={"left"} miw={80} maw={100}>
                  Agent Id:
                </Text>
                <Text fz={13} truncate maw={150} fw={600}>
                  {data.agentId}
                </Text>
              </Group>
              <Group gap={6} maw={258}>
                <Text fz={13} fw={700} truncate ta={"left"} miw={30} maw={100}>
                  Dv:
                </Text>
                <Text fz={13} truncate maw={150} fw={600}>
                  {data.dv}
                </Text>
              </Group>

              <Group gap={6} maw={258}>
                <Text fz={13} fw={700} truncate ta={"left"} miw={80} maw={100}>
                  Location:
                </Text>
                <Text fz={13} truncate maw={150} fw={600}>
                  {data.location}
                </Text>
              </Group>
              <Group gap={6} maw={258}></Group>
              <Group gap={6} maw={258}>
                <Text fz={13} fw={700} truncate ta={"left"} miw={30} maw={100}>
                  Prime:
                </Text>
                <Text fz={13} truncate maw={150} fw={600}>
                  {data.partial}
                </Text>
              </Group>
              <Group gap={6} maw={258}>
                <Text fz={13} fw={700} truncate ta={"left"} miw={30} maw={100}>
                  User:
                </Text>
                <Text fz={13} truncate maw={150} fw={600}>
                  Test User{" "}
                </Text>
              </Group>
            </SimpleGrid>
          </Flex>
        </div>
        <div className={style.letterContent}>
          <div className="w-full flex flex-wrap border-black border">
            {Object.keys(data).map((key: string, i) =>
              data[key] ? (
                <div
                  key={i}
                  className="flex gap-1 flex-col flex-grow border-black border   w-fit  items-center justify-center p-2"
                >
                  <GenerateBarCode data={data[key]} />
                  <Text fz={15} fw={600}>
                    {key}
                  </Text>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
        <div className={style.letterFooter}></div>
      </div>
    </div>
  );
};

export default DemoPaper;
