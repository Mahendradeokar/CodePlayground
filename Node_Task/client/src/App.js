import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={routes} />
      </ChakraProvider>
    </>
  );
}

export default App;
