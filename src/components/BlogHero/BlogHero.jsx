import React from "react";
import { Box, Center, Heading, Image, VStack } from "@chakra-ui/react";

function BlogHero({ title, bgUri }) {
  return (
    <Box
      height={"200px"}
      background={"black"}
      overflow={"hidden"}
      position="relative"
    >
      <Image
        src={bgUri} // Replace with your image path
        alt="Blog Hero Background"
        objectFit="cover"
        w="100%"
        h="400px" // Set your desired height
        opacity="0.5"
      />
      <VStack
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        spacing={4}
        color="white"
      >
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
        {/* Add additional text or elements here */}
      </VStack>
    </Box>
  );
}

export default BlogHero;
