import {
  BackgroundImage,
  Box,
  Center,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import ProjectsBgImg from "../assets/Works.svg";
import Scroll from "../assets/Scroll.svg";
import React from "react";

const Projects: React.FC = () => {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      c={"#FFFFFF"}
      style={{ fontFamily: "monospace" }}
    >
      {" "}
      <BackgroundImage src={ProjectsBgImg} p={3}>
        <Box p={"1rem 10rem 3rem 10rem"}>
          {" "}
          <Center>
            <Image src={Scroll} alt="scroll" w={34} h={124} mt={60} mb={60} />
          </Center>
          <Flex justify={"center"} align={"center"} direction={"column"}>
            {" "}
            <Title c={"#12F7D6"} style={{ fontFamily: "monospace" }}>
              Projects
            </Title>
            <Text mt={6} fz={18}>
              I had the pleasure of working with these awesome projects
            </Text>
          </Flex>
        </Box>
      </BackgroundImage>
    </Flex>
  );
};

export default Projects;
