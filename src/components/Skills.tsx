import {
  BackgroundImage,
  Center,
  Flex,
  Image,
  Title,
  Text,
  Box,
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
        <Flex p={"1.5rem 20rem 3rem 20rem"} direction={"column"} pt={70}>
          <Flex justify={"center"} align={"center"} direction={"column"}>
            {" "}
            <Title c={"#12F7D6"} style={{ fontFamily: "monospace" }}>
              Technologies
            </Title>
            <Text mt={6} fz={18}>
              I am striving to never stop learning and improving
            </Text>
          </Flex>
          <Box mt={50}>
            <Flex justify={"space-between"}>
              <Text fz={20}> HTML</Text>
              <Text>Advance</Text>
            </Flex>
            <Box
              mt={4}
              mb={20}
              w={"100%"}
              bg={"grey"}
              h={14}
              style={{ borderRadius: "20px" }}
            >
              <Box
                w={"80%"}
                bg={
                  "linear-gradient(90deg, rgba(18,247,214,1) 8%, rgba(152,250,236,1) 100%)"
                }
                h={14}
                style={{ borderRadius: "20px" }}
              ></Box>
            </Box>
            <Flex justify={"space-between"}>
              <Text fz={20}> CSS, Sass, Bootstrap, TailwindCss & Mantine</Text>
              <Text>Advance</Text>
            </Flex>
            <Box
              mt={4}
               mb={20}
              w={"100%"}
              bg={"grey"}
              h={14}
              style={{ borderRadius: "20px" }}
            >
              <Box
                w={"80%"}
                bg={
                  "linear-gradient(90deg, rgba(18,247,214,1) 8%, rgba(152,250,236,1) 100%)"
                }
                h={14}
                style={{ borderRadius: "20px" }}
              ></Box>
            </Box>
            <Flex justify={"space-between"}>
              <Text fz={20}> JavaScript, TypeScript</Text>
              <Text>Regular</Text>
            </Flex>{" "}
            <Box
              mt={4}
               mb={20}
              w={"100%"}
              bg={"grey"}
              h={14}
              style={{ borderRadius: "20px" }}
            >
              <Box
                w={"70%"}
                bg={
                  "linear-gradient(90deg, rgba(18,247,214,1) 8%, rgba(152,250,236,1) 100%)"
                }
                h={14}
                style={{ borderRadius: "20px" }}
              ></Box>
            </Box>
            <Flex justify={"space-between"}>
              <Text fz={20}> UI design in Figma</Text>
              <Text>Regular</Text>
            </Flex>
            <Box
              mt={4}
               mb={20}
              w={"100%"}
              bg={"grey"}
              h={14}
              style={{ borderRadius: "20px" }}
            >
              <Box
                w={"60%"}
                bg={
                  "linear-gradient(90deg, rgba(18,247,214,1) 8%, rgba(152,250,236,1) 100%)"
                }
                h={14}
                style={{ borderRadius: "20px" }}
              ></Box>
            </Box>
            <Flex justify={"space-between"}>
              <Text fz={20}> React</Text>
              <Text>Regular</Text>
            </Flex>
            <Box
              mt={4}
               mb={20}
              w={"100%"}
              bg={"grey"}
              h={14}
              style={{ borderRadius: "20px" }}
            >
              <Box
                w={"70%"}
                bg={
                  "linear-gradient(90deg, rgba(18,247,214,1) 8%, rgba(152,250,236,1) 100%)"
                }
                h={14}
                style={{ borderRadius: "20px" }}
              ></Box>
            </Box>
            <Flex justify={"space-between"}>
              <Text fz={20}> NextJs</Text>
              <Text>Beginner</Text>
            </Flex>
            <Box
              mt={4}
              w={"100%"}
              bg={"grey"}
              h={14}
              style={{ borderRadius: "20px" }}
            >
              <Box
                w={"40%"}
                bg={
                  "linear-gradient(90deg, rgba(18,247,214,1) 8%, rgba(152,250,236,1) 100%)"
                }
                h={14}
                style={{ borderRadius: "20px" }}
              ></Box>
            </Box>
          </Box>
        </Flex>
      </BackgroundImage>
    </Flex>
  );
};

export default Skills;
