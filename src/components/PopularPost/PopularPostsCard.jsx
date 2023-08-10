import React from "react";

import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

function PopularPostsCard({ image, title, datePosted, description }) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      borderRadius="lg"
      borderWidth="1px"
      overflow="hidden"
      boxShadow="md"
      maxWidth="600px"
      mx="auto"
      my="4"
    >
      <Box flexShrink="0" width={{ base: "100%", md: "40%" }}>
        <Image
          src={image} // Replace with your image URL
          alt="Post Image"
          objectFit="cover"
          height="100%"
          width="100%"
        />
      </Box>
      <Stack
        p="4"
        spacing="2"
        width={{ base: "100%", md: "60%" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {datePosted}
        </Text>
        <Text fontSize="md">{description}</Text>
        <Button colorScheme="red" size="md">
          Read More
        </Button>
      </Stack>
    </Flex>
  );
}

export default PopularPostsCard;
