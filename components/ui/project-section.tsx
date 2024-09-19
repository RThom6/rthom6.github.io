import { Box, Flex, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react';

type ProjectSectionProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export const ProjectSection = ({ title, description, imageUrl }: ProjectSectionProps) => {
  const flexDirection = useBreakpointValue<'row' | 'column'>({ base: 'column', md: 'row' });
  
  return (
    <Flex
      flexDirection={flexDirection}
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
      <Box flex="1">
        <Image
          src={imageUrl}
          alt={title}
          borderRadius="md"
          boxSize={useBreakpointValue({ base: '100%', md: '100%' })}
          objectFit="cover"
        />
      </Box>

      <Box flex="1" textAlign="left">
        <Heading as="h2" size="xl" mb="4" color="purple.400">
          {title}
        </Heading>
        <Text fontSize="lg" color="gray.300">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
