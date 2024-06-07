import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";

import Scroll from "../assets/Scroll.svg";
import React from "react";
import { IconSend } from "@tabler/icons-react";

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
          <Text
            fz={27}
            mt={60}
            style={{
              border: "3px solid #12F7D6",
              borderTopLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
              textAlign: "center",
              cursor: "pointer",
            }}
            p={"10px 25px 10px 25px"}
            bg={"#292F36"}
            c={"#12F7D6"}
          >
            Send Me A Message
          </Text>
          <form>
            <Flex direction={"column"} mt={100}>
              <Flex gap={175}>
                <TextInput
                  placeholder="Enter your name"
                  label={
                    <Text fw={400} size="15px" c={"#12F7D6"} mb={5}>
                      Your name *
                    </Text>
                  }
                  type="name"
                  w={420}
                  styles={{
                    input: {
                      backgroundColor: "#292F36",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderBottom: "1px solid #12F7D6",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      color: "white",
                    },
                  }}
                />
                <TextInput
                  placeholder="Enter your email"
                  label={
                    <Text fw={400} size="15px" c={"#12F7D6"} mb={5}>
                      Your email *
                    </Text>
                  }
                  type="email"
                  w={420}
                  styles={{
                    input: {
                      backgroundColor: "#292F36",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderBottom: "1px solid #12F7D6",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      color: "white",
                    },
                  }}
                />
              </Flex>

              <Textarea
                mt={30}
                placeholder="Enter your needs"
                label={
                  <Text mb={5} size="15px" c={"#12F7D6"}>
                    Message *
                  </Text>
                }
                styles={{
                  input: {
                    backgroundColor: "#292F36",
                    height: "36px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid #12F7D6",
                    color: "white",
                  },
                }}
              />
              <Center mt={50}>
                <Button
                  variant="gradient"
                  c={"#1A1E23"}
                  gradient={{ from: "#12F7D6", to: "#98FAEC", deg: 90 }}
                  w={"200px"}
                  h={"50px"}
                  radius={"50rem"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    fw={500}
                    size="17px"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Send Message <IconSend />
                  </Text>
                </Button>
              </Center>
            </Flex>
          </form>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Contact;
