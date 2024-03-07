import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Hello = () => {
  return <h1>Hello</h1>;
};

const Welcome = () => {
  return <h1>Welcome</h1>;
};

// const Singup = () => {
//   return (
//     <Flex
//       h={"100vh"}
//       justifyContent={"center"}
//       alignItems={"center"}
//       m={"auto"}
//     >
//       <Flex direction={"column"} gap={"3"} width={"25rem"}>
//         <Heading>Singup</Heading>
//         <FormControl isRequired>
//           <FormLabel>Type</FormLabel>
//           <
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Name</FormLabel>
//           <Input placeholder="First name" />
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Email</FormLabel>
//           <Input placeholder="Email" />
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Password</FormLabel>
//           <Input placeholder="Password" />
//         </FormControl>
//         <Button mt={4} colorScheme="teal" type="submit">
//           Submit
//         </Button>
//       </Flex>
//     </Flex>
//   );
// };

const Merge = [Hello, Welcome];

const New = () => {
  return (
    Merge.map((Com) => {
      return <Com />
    })
  );
};

export default New;
