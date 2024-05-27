import {
  BackgroundImage,
  Box,
  Center,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import AboutBgImg from "../assets/About me.svg";
import React from "react";
import Scroll from "../assets/Scroll.svg";
import AboutImage from "../assets/Image.svg";

const About: React.FC = () => {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      c={"#FFFFFF"}
      style={{ fontFamily: "monospace" }}
    >
      <BackgroundImage src={AboutBgImg} p={3}>
        <Center>
          <Image src={Scroll} alt="scroll" w={34} h={124} mt={60} mb={60} />
        </Center>
        <Flex p={"1.5rem 10rem 0.6rem 10rem"} gap={80} pt={70}>
          <Box>
            <Title
              style={{
                border: "3px solid #12F7D6",
                borderTopLeftRadius: "1.5rem",
                borderBottomRightRadius: "1.5rem",
                textAlign: "center",
                fontFamily: "monospace",
              }}
              p={10}
              w={250}
              bg={"#292F36"}
            >
              About Me
            </Title>
            <Box
              bg={"#292F36"}
              mt={60}
              p={"25px 35px 25px 35px"}
              style={{ borderRadius: "40px" }}
            >
              <Text c={"#98FAEC"} pb={14}>
                {" "}
                {"<p>"}
              </Text>
              <Title c={"#12F7D6"} style={{ fontFamily: "monospace" }}>
                Hello !
              </Title>
              <Text fz={16} pt={4}>
                My name is Sabita and I specialize in web developement that
                utilizes HTML, CSS, JS, and{" "}
                <Text span inherit c={"#12F7D6"}>
                  REACT
                </Text>{" "}
                etc.
              </Text>
              <Text fz={16}>
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving. <br /> When I'm
                not coding, I immersed in the captivating stories of kdramas and
                anime, lost in the pages of thrilling novels, or {""}
                <Text span c={"#12F7D6"}>
                  diving into the endless possibilities of coding, where each
                  line is a chance to create something extraordinary.
                </Text>
                <Text fz={16}>
                  I like to have my perspective and belief systems challenged so
                  that I see the world through new eyes.
                </Text>
              </Text>

              <Text pt={14} c={"#98FAEC"}>
                {"<p/>"}{" "}
              </Text>
            </Box>
          </Box>
          <Image src={AboutImage} alt="Upload Error" radius={30} />
        </Flex>
      </BackgroundImage>
    </Flex>
  );
};

export default About;
