import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBriefcase,
  IconDownload,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

import SabitaResume from "../assets/Sabita Resume Doc.pdf";

const Home = () => {
  return (
    <Flex
      p={"3rem 6rem 4rem 6rem"}
      direction={"column"}
      bg={"#292F36"}
      c={"#FFFFFF"}
      style={{ fontFamily: "monospace" }}
    >
      <Center>
        <Title style={{ fontFamily: "monospace" }} c={"#98FAEC"} fz={48}>
          Frontend Developer
        </Title>
      </Center>

      <Flex justify={"center"} gap={70} align={"center"} mt={55}>
        <Flex
          pt={35}
          direction={"column"}
          align={"center"}
          h={560}
          style={{
            border: "4px solid #FFFFFF",
            borderTopLeftRadius: "10rem",
            borderBottomRightRadius: "10rem",
            boxShadow: "-4px -4px 4px #98FAEC",
          }}
          p={"lg"}
        >
          <Avatar
            src="https://www.winteriscoding.ca/assets/headerPortrait.svg"
            alt="it's me"
            w={120}
            h={120}
            style={{ border: "2px solid #12F7D6" }}
          />
          <Box>
            <Text fz={24} mt={15}>
              Sabita
            </Text>
            <Text>Frontend Developer</Text>
          </Box>
          <Box pt={25}>
            <Flex gap={30} p={5}>
              <IconMail color="#12F7D6" />
              <Text>sabitakhadka091@gmail.com</Text>
            </Flex>
            <Flex gap={30} p={7}>
              <IconMapPin color="#12F7D6" />
              <Text>Kathmandu,Koteshor</Text>
            </Flex>
            <Flex gap={30} p={7}>
              <IconBriefcase color="#12F7D6" />
              <Text>Full-time / Freelancer</Text>
            </Flex>
            <Flex justify={"center"} align={"center"} gap={34} pt={15}>
              <Badge color="#12F7D6" autoContrast>
                HTML
              </Badge>
              <Badge color="#12F7D6" autoContrast>
                CSS
              </Badge>
              <Badge color="#12F7D6" autoContrast>
                JS
              </Badge>
              <Badge color="#12F7D6" autoContrast>
                React
              </Badge>
            </Flex>
            <Anchor href={SabitaResume} download>
              <Button mt={40} ml={60} radius={70} h={45} color="#FFFFFF">
                <Text pr={8} c={"black"}>
                  Download CV
                </Text>
                <IconDownload width={18} height={18} color="black" />
              </Button>
            </Anchor>
          </Box>
        </Flex>
        <Flex direction={"column"} w={500} p={"lg"}>
          <Box p={15}>
            <Text c={"#98FAEC"}>{"<h>"} </Text>

            <Text fz={38}>Hey</Text>
            <Text fz={38}>
              I'm{" "}
              <Text c={"#12F7D6"} span inherit>
                Sabita
              </Text>
              ,
            </Text>
            <Text fz={38}>Frontend Developer</Text>

            <Text c={"#98FAEC"}>{"<h1/>"} </Text>
          </Box>
          <Box p={15}>
            <Text c={"#98FAEC"}> {"<p>"}</Text>
            <Text fz={16} p={4}>
              I help businesses grow by creating exceptional web experiences. If
              you're looking for a developer who gets results, let's connect.
            </Text>

            <Text c={"#98FAEC"}>{"<p/>"} </Text>
          </Box>
          <Flex gap={"1rem"} align={"center"} p={15}>
            <Text fz={30} c="#12F7D6">
              let's talk
            </Text>
            <Box
              bg={"#43454D"}
              p={"6px 7px 0px 7px"}
              style={{ borderRadius: "50rem", cursor: "pointer" }}
            >
              <IconMail color="#12F7D6" />
            </Box>
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          bg={"#1A1E23"}
          w={250}
          h={400}
          style={{
            borderRadius: "6rem",
          }}
          p={40}
        >
          <Flex pt={40} gap={20} align={"center"}>
            <Title c={"#12F7D6"}>2</Title>
            <Text>Programming Languages</Text>
          </Flex>
          <Flex pt={20} gap={20} align={"center"}>
            <Title c={"#12F7D6"}>1</Title>
            <Text>Development Tools</Text>
          </Flex>{" "}
          <Flex pt={20} gap={20} align={"center"}>
            <Title c={"#12F7D6"}>0</Title>
            <Text>Years of Experience</Text>
          </Flex>
          <Flex pt={20} gap={20} align={"center"}>
            <Title c={"#12F7D6"}>1</Title>
            <Text>Frameworks</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
