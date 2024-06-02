import { useState } from "react";

import { Button, Input, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "./Home";




const Login = () => {
  let [email, setEMail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();


  async function handleLogin() {
    try {
      let res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });
      navigate("./Home")
      
    } catch (error) {
      alert(error);
    }
  }

  return (
    <VStack
      mt={6}
      spacing={10}
      maxW="600px"
      width="100%"
      mx="auto"
      border="1px solid teal"
      borderRadius="md"
      p={6}
    >
      <h1 style={{ fontSize: "3rem", color: "teal", fontWeight: "900" }}>
        LOGIN PAGE
      </h1>
      <Input
        placeholder="Enter EMail "
        size="md"
        type="email"
        value={email}
        onChange={(e) => setEMail(e.target.value)}
      />
      <Input
        placeholder="Enter Password "
        size="md"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme="teal" variant="outline" onClick={handleLogin}>
        LOGIN
      </Button>
    </VStack>
  );
};

export default Login;
