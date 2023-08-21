import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

function PopularPostsCard({
  image,
  title,
  datePosted,
  description,
  topic,
  slug,
}) {
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
      <Box
        flexShrink="0"
        position={"relative"}
        width={{ base: "100%", md: "40%" }}
      >
        <Tag position={"absolute"} top={"2"} left={2}>
          {topic}
        </Tag>
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
          {moment(datePosted).format("LLL")}
        </Text>
        <Text fontSize="md">{description}</Text>
        <Link to={"/post/" + slug}>
          <Button colorScheme="red" size="md">
            Read More
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
}

export default PopularPostsCard;
