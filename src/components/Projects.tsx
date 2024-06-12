import {
  BackgroundImage,
  Box,
  Center,
  Flex,
  Image,
  Text,
  Title,
  Card,
  Anchor,
} from "@mantine/core";
import ProjectsBgImg from "../assets/Works.svg";
import Scroll from "../assets/Scroll.svg";
import React, { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const cardData = [
  {
    id: 1,
    title: "Travel List",
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    description:
      "React Travel Packing List: Organize items by input, description, or packed status. Streamline travel preparation with ease and efficiency.",
    demolink:
      "https://665aae008484c0fa14e45075--incredible-kashata-c38611.netlify.app/",
  },
  {
    id: 2,
    title: "Eat-n-split",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "React-powered Eat and Split app: Easily split bills, track expenses, and manage shared costs effortlessly with friends.",
    demolink: "https://zingy-arithmetic-fbd779.netlify.app/?",
  },
  {
    id: 3,
    title: "ForeCastify",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description:
      "A simple weather application built with React that enables users to check the weather forecast for specific locations.s",
    demolink:
      "https://659531ff0f70d883df99e866--tranquil-halva-ce5a42.netlify.app",
  },
  {
    id: 4,
    title: "FlickPicks",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    description:
      "Discover films matching your taste with FlickPicks, a React app for movie recommendations, details, and saving favorites.",
    demolink:
      "https://6596cebd993dc500728433ac--endearing-snickerdoodle-21afbe.netlify.app",
  },
  {
    id: 5,
    title: "Fast React Pizza Co.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    description:
      "Fast React Pizza Co.: Vite and React-powered app for seamless pizza ordering with a user-friendly interface and real-time updates.",
    demolink:
      "https://665aaeb2c001c3fda3e438f6--incredible-kashata-c38611.netlify.app/",
  },
  {
    id: 6,
    title: "Workout-Timer",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    description:
      "React-based Workout Timer: Real-time clock, sound toggling, personalized routines adapting to the time of day.",
    demolink:
      "https://65a6769cc7771a00a17b1897--calm-taiyaki-837093.netlify.app/",
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const currentCard = cardData[currentIndex];

  return (
    <Flex
      justify={"center"}
      direction={"column"}
      c={"#FFFFFF"}
      style={{ fontFamily: "monospace" }}
    >
      <BackgroundImage src={ProjectsBgImg} p={3}>
        <Box p={"1rem 10rem 3rem 10rem"}>
          <Center>
            <Image src={Scroll} alt="scroll" w={34} h={124} mt={60} mb={60} />
          </Center>
          <Flex justify={"center"} align={"center"} direction={"column"}>
            <Title c={"#12F7D6"} style={{ fontFamily: "monospace" }}>
              Projects
            </Title>
            <Text mt={6} fz={18}>
              I had the pleasure of working with these awesome projects
            </Text>
          </Flex>
          <Center mt={70}>
            <Box
              onClick={handlePrev}
              mr="7rem"
              bg={"#43454D"}
              p={"6px 6.8px 0px 7px"}
              style={{ borderRadius: "50rem", cursor: "pointer" }}
            >
              <IconChevronLeft size={30} />
            </Box>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              bg={"#43454D"}
              c="#ffffff"
              withBorder
              w={400}
            >
              <Card.Section>
                <Image
                  src={currentCard.image}
                  height={160}
                  alt={currentCard.title}
                />
              </Card.Section>

              <Title
                fw={400}
                fz={25}
                p={9}
                style={{
                  textAlign: "center",
                }}
                c={"#ffffff"}
              >
                {currentCard.title}
              </Title>

              <Box size={"sm"}>
                <Text c={"#98FAEC"}>{"<h>"} </Text>
                <Text c={"#ffffff"}> {currentCard.description}</Text>
                <Text c={"#98FAEC"}>{"</h>"} </Text>
              </Box>

              <Anchor href={currentCard.demolink}>
                <Text
                  pt={8}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  c={"#98FAEC"}
                >
                  {" "}
                  View Website
                </Text>
              </Anchor>
            </Card>
            <Box
              onClick={handleNext}
              ml="7rem"
              bg={"#43454D"}
              p={"6px 6.8px 0px 7px"}
              style={{ borderRadius: "50rem", cursor: "pointer" }}
            >
              <IconChevronRight size={30} />
            </Box>
          </Center>
        </Box>
      </BackgroundImage>
    </Flex>
  );
};

export default Projects;
