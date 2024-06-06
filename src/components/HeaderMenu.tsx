import { Group, Burger, Flex, Box, Title, Text, Divider } from "@mantine/core";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import { Fragment } from "react/jsx-runtime";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const { scrollIntoView: scrollIntoHome, targetRef: targetRefHome } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoAbout, targetRef: targetRefAbout } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoSkills, targetRef: targetRefSkill } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoProjects, targetRef: targetRefProjects } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoContact, targetRef: targetRefContact } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });

  return (
    <Fragment>
      {" "}
      <Flex
        direction={"column"}
        c={"#FFFFFF"}
        bg={"#292F36"}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "999",
        }}
      >
        <Box
          c={"#FFFFFF"}
          bg={"#292F36"}
          style={{ fontFamily: "monospace" }}
          size="md"
          p={"1.5rem 6rem 0.6rem 6rem"}
        >
          <Flex justify={"space-between"}>
            <Title style={{ fontFamily: "monospace" }}>
              {" "}
              <Text fz={32} c={"#12F7D6"} fw={900} span>
                {"<C/>"}
              </Text>{" "}
              SabitaKhadka
            </Title>
            <Group justify="center" gap="2rem" visibleFrom="sm" h="100%">
              <Box
                c={"#FFFFFF"}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={(event) => event.preventDefault()}
              >
                <Text pt={5} fw={550} fz={19} onClick={() => scrollIntoHome()}>
                  Home
                </Text>
              </Box>
              <Box
                c={"#FFFFFF"}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={(event) => event.preventDefault()}
              >
                <Text
                  pt={5}
                  fw={550}
                  fz={19}
                  onClick={() =>
                    scrollIntoAbout({
                      alignment: "center",
                    })
                  }
                >
                  About
                </Text>
              </Box>{" "}
              <Box
                c={"#FFFFFF"}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={(event) => event.preventDefault()}
              >
                <Text
                  pt={5}
                  fw={550}
                  fz={19}
                  onClick={() => scrollIntoSkills()}
                >
                  Skills
                </Text>
              </Box>{" "}
              <Box
                c={"#FFFFFF"}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={(event) => event.preventDefault()}
              >
                <Text
                  pt={5}
                  fw={550}
                  fz={19}
                  onClick={() => scrollIntoProjects()}
                >
                  Project
                </Text>
              </Box>
              <Box
                c={"#FFFFFF"}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={(event) => event.preventDefault()}
              >
                <Text
                  pt={5}
                  fw={550}
                  fz={19}
                  onClick={() => scrollIntoContact()}
                >
                  Contact
                </Text>
              </Box>
            </Group>
            <Burger
              color={"#FFFFFF"}
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </Flex>
        </Box>
        <Divider />
      </Flex>
      <Box ref={targetRefHome}>
        <Home />
      </Box>
      <Box ref={targetRefAbout}>
        {" "}
        <About />
      </Box>
      <Box ref={targetRefSkill}>
        {" "}
        <Skills />
      </Box>
      <Box ref={targetRefProjects}>
        {" "}
        <Projects />
      </Box>
      <Box ref={targetRefContact}>
        {" "}
        <Contact />
      </Box>
    </Fragment>
  );
}
