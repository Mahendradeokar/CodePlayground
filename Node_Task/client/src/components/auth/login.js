import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      m={"auto"}
    >
      <Flex direction={"column"} gap={"3"} width={"25rem"}>
        <Heading>Login</Heading>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder="First name" type="password" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
