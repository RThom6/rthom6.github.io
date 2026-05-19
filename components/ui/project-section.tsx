import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

type ProjectSectionProps = {
  title: string;
  description: string;
  imageUrl: string;
  description2?: string;
};

export const ProjectSection = ({ title, description, imageUrl, description2 }: ProjectSectionProps) => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      gap="6"
      p="6"
      bg="black.800"
      borderRadius="lg"
      boxShadow="md"
      maxW="1920px"
      mx="auto"
    >
      <Box flex="1" textAlign="left" order={{ base: 0, md: 1 }}>
        <Heading as="h2" size="xl" mb="4" color="purple.400">
          {title}
        </Heading>
        <Text fontSize="lg" color="gray.300">
          {description}
          <br />
          {description2}
        </Text>
      </Box>

      <Box flex="1" order={{ base: 1, md: 0 }}>
        <Image
          src={imageUrl}
          alt={title}
          borderRadius="md"
          boxSize="100%"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};
