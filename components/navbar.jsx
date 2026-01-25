import { Flex, Heading, Button, HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      px={8}
      py={4}
      justify="space-between"
      align="center"
      bg="#805AD5"
      color="white"
    >
      <Heading size="md">PurpleCrust Bakery</Heading>
      <HStack spacing={6}>
        <Button variant="ghost" color="white">Menu</Button>
        <Button variant="ghost" color="white">Contact</Button>
      </HStack>
    </Flex>
  );
}
