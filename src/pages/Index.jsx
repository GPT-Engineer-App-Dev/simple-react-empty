import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" py={4}>
        <Container maxW="container.lg">
          <Text fontSize="xl">Navigation Bar</Text>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Box as="main" flex="1" py={8}>
        <Container maxW="container.lg">
          <VStack spacing={4}>
            <Text fontSize="2xl">Your Blank Canvas</Text>
            <Text>Chat with the agent to start making edits.</Text>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4}>
        <Container maxW="container.lg">
          <Text fontSize="sm">Footer</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;