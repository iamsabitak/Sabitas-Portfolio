import { Group, Burger, Flex, Box, Anchor, Title, Text } from "@mantine/core";
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
    <header>
      <Box c={"#FFFFFF"} bg={"#292F36"} size="md" p={"1.5rem 6rem 1rem 6rem"}>
        <Flex justify={"space-between"}>
          <Title style={{ fontFamily: "fantasy" }}>SabitaKhadka</Title>
          <Group gap="2rem" visibleFrom="sm" h="100%">
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
                <Text fw={550} fz={18}>
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
    </header>
  );
}
