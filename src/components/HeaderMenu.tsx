import { Group, Burger, Flex, Box, Title, Text, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Flex direction={"column"} c={"#FFFFFF"} bg={"#292F36"}>
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
              }}
              onClick={(event) => event.preventDefault()}
            >
              <Text pt={5} fw={550} fz={19}>
                Home
              </Text>
            </Box>
            <Box
              c={"#FFFFFF"}
              style={{
                textDecoration: "none",
              }}
              onClick={(event) => event.preventDefault()}
            >
              <Text pt={5} fw={550} fz={19}>
                About
              </Text>
            </Box>{" "}
            <Box
              c={"#FFFFFF"}
              style={{
                textDecoration: "none",
              }}
              onClick={(event) => event.preventDefault()}
            >
              <Text pt={5} fw={550} fz={19}>
                Skills
              </Text>
            </Box>{" "}
            <Box
              c={"#FFFFFF"}
              style={{
                textDecoration: "none",
              }}
              onClick={(event) => event.preventDefault()}
            >
              <Text pt={5} fw={550} fz={19}>
                Project
              </Text>
            </Box>
            <Box
              c={"#FFFFFF"}
              style={{
                textDecoration: "none",
              }}
              onClick={(event) => event.preventDefault()}
            >
              <Text pt={5} fw={550} fz={19}>
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
  );
}
