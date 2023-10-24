import { CustomeForm } from "../../components/Form/index";
import { Paper, Text, Flex, Title } from "@mantine/core";
import classes from "./login.module.css";
export function LoginPage() {
  return (
    <Flex align="center" justify="center" direction="column" gap={1} w={'100%'} h={'100vh'}>
        <Paper className={classes.form} radius={7} p={30} mb={10} bg={'primary.1'} >
          <Paper withBorder radius="xl" p={0} className=" shadow-sm">
            <Flex align={'center'} justify={'center'} direction={'row'} p={6}>
              <Text px={15} typeof="h5" size="xl">
                User Login
              </Text>
            </Flex>
          </Paper>
          <CustomeForm />
        </Paper>
    </Flex>
  );
}
