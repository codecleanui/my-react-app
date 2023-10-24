import {
  Checkbox,
  Flex,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { login, getCurrentUser } from "../../api";
import { useForm, hasLength } from "@mantine/form";
import { CustomButton } from "..";
import { IconAt, IconLockOff } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
export function CustomeForm() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: hasLength({ min: 6 }, "Invalid password"),
    },
  });
  const handleSubmit = (values: any) => {
    login(values.email, values.password)
      .then((data) => {
        if (data) {
          localStorage.setItem("token", JSON.stringify(data));
        }
        navigate("/");

        // Authentication succeeded
        // Perform any necessary actions after successful login
        console.log("Logged in as", getCurrentUser()?.username, data);
      })
      .catch((error) => {
        // Authentication failed
        console.log(error.message);
      });
  };
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex direction={'column'} gap={10}>
      <TextInput
        leftSection={<IconAt size="1rem" />}
        label="Email"
        placeholder="Enter Email"
        withAsterisk
        {...form.getInputProps("email")}
      />
      <PasswordInput
        leftSection={<IconLockOff size="1rem" />}
        label="Password"
        placeholder="Enter Password"
        withAsterisk
        {...form.getInputProps("password")}
      />

      <Select
        label="Role"
        placeholder="Pick one"
        data={[
          { value: "admin", label: "Admin" },
          { value: "user", label: "User" },
          { value: "superAdmin", label: "Super Admin" },
        ]}
        {...form.getInputProps("role")}
      />
      <Checkbox
        label="I accepts terms & conditions"
        {...form.getInputProps("terms")}
      />
      </Flex>

      <Flex justify="flex-end">
        <CustomButton type="submit" children="Sign In" />
      </Flex>
    </form>
  );
}