import { Box, Center, Flex, Image, Text, Title } from "@mantine/core";

import Scroll from "../assets/Scroll.svg";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      c={"#FFFFFF"}
      style={{ fontFamily: "monospace" }}
    >
      {" "}
      <Box p={"1rem 10rem 3rem 10rem"} bg={"#292F36"}>
        {" "}
        <Center>
          <Image src={Scroll} alt="scroll" w={34} h={124} mt={60} mb={60} />
        </Center>
        <Flex justify={"center"} align={"center"} direction={"column"}>
          {" "}
          <Title c={"#12F7D6"} style={{ fontFamily: "monospace" }}>
            Contact
          </Title>
          <Text mt={6} fz={18}>
            I’m currently available for freelance, Omnsite, and remote work
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Contact;
