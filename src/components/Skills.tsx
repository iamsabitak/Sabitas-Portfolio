import {
  BackgroundImage,
  Center,
  Flex,
  Image,
  Title,
  Text,
  Box,
  Slider,
} from "@mantine/core";
import SkillBgImg from "../assets/Skills.svg";
import Scroll from "../assets/Scroll.svg";
import React from "react";

const Skills: React.FC = () => {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      c={"#FFFFFF"}
      style={{ fontFamily: "monospace" }}
    >
      <BackgroundImage src={SkillBgImg} p={3}>
        <Center>
          <Image src={Scroll} alt="scroll" w={34} h={124} mt={60} mb={60} />
        </Center>
        <Flex p={"1.5rem 10rem 3rem 10rem"} direction={"column"} pt={70}>
          <Flex justify={"center"} align={"center"} direction={"column"}>
            {" "}
            <Title c={"#12F7D6"} style={{ fontFamily: "monospace" }}>
              Technologies
            </Title>
            <Text mt={6}>
              I am striving to never stop learning and improving
            </Text>
          </Flex>
          <Box>
            HTML
            <Slider
              defaultValue={60}
              disabled
              styles={{ bar: { color: "red" } }}
            />
            CSS, Sass, Bootstrap, TailwindCss & Mantine
            <Slider defaultValue={60} disabled />
            JavaScript, TypeScript
            <Slider defaultValue={60} disabled />
            UI design in Figma
            <Slider defaultValue={60} disabled />
            React
            <Slider defaultValue={60} disabled />
            NextJs
            <Slider defaultValue={60} disabled />
          </Box>
        </Flex>
      </BackgroundImage>
    </Flex>
  );
};

export default Skills;
