import {
  BackgroundImage,
  Box,
  Center,
  Flex,
  Image,
  Text,
  Title,
  Card,
} from "@mantine/core";
import ProjectsBgImg from "../assets/Works.svg";
import Scroll from "../assets/Scroll.svg";
import React, { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const cardData = [
  {
    id: 1,
    title: "Norway Fjord Adventures",
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
  },
  {
    id: 2,
    title: "Beautiful Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Discover the most beautiful beaches in the world with our exclusive tours",
  },
  {
    id: 3,
    title: "Mountain Hiking",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description:
      "Join us for an unforgettable hiking experience in the most scenic mountains",
  },
  {
    id: 4,
    title: "City Exploration",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    description:
      "Explore the hidden gems of the world's most fascinating cities",
  },
  {
    id: 5,
    title: "Cultural Heritage",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    description:
      "Immerse yourself in the rich cultural heritage of various regions",
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
                c={"#98FAEC"}
              >
                {currentCard.title}
              </Title>

              <Text size="sm" c={"#ffffff"}>
                {currentCard.description}
              </Text>

              <Box
                pt={8}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                c={"#98FAEC"}
              >
                View Website
              </Box>
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
