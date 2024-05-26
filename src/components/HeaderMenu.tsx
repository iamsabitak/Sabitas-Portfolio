import {
  Group,
  Burger,
  Flex,
  Box,
  Anchor,
  Title,
  Text,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/contact", label: "Contact" },
];

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
            {links.map((link) => (
              <Anchor
                key={link.label}
                c={"#FFFFFF"}
                href={link.link}
                style={{
                  textDecoration: "none",
                }}
                onClick={(event) => event.preventDefault()}
              >
                <Text pt={5} fw={550} fz={19}>
                  {link.label}
                </Text>
              </Anchor>
            ))}
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
