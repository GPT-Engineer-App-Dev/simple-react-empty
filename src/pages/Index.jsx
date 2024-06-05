import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation Bar */}
        <Box as="nav" bg="blue.500" color="white" p={4}>
          <Text fontSize="xl">Navigation Bar</Text>
        </Box>

        {/* Main Content Area */}
        <Flex as="main" flex="1" direction="column" align="center" justify="center" p={4}>
          <VStack spacing={4}>
            <Text fontSize="2xl">Welcome to Our Website</Text>
            <Text>Start exploring our content.</Text>
          </VStack>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="gray.700" color="white" p={4} textAlign="center">
          <Text>Footer Content</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;