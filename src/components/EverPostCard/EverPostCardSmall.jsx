import React from "react";

import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

function EverPostCardSmall({ title, date }) {
  return (
    <Flex
      gap={2}
      align={"center"}
      width={{ md: "100%", base: "100%" }}
      justifyContent={"start"}
      bg={"whitesmoke"}
      borderRadius={10}
      p={2}
    >
      <Box width={"50%"} height={"100%"}>
        <Image
          width={"100%"}
          height={"100%"}
          fit={"cover"}
          src="https://img.freepik.com/free-photo/full-shot-artisan-doing-woodcutting_23-2150104858.jpg?w=740&t=st=1691671545~exp=1691672145~hmac=7cfdec71790f66913d6dfa8a6a0adfd88db9fd08d3bf39c97f7996f0482722b6"
        />
      </Box>
      <Flex direction={"column"} height={"100%"} align={"start"}>
        <Text fontWeight={"bold"}>Lorem ipsum dolor Amet</Text>
        <Text fontSize={"sm"}>
          some little text about the blog will be here thats a blog post
        </Text>
        <Text mt={2} fontSize={12}>
          20 August, 2023
        </Text>
      </Flex>
    </Flex>
  );
}

export default EverPostCardSmall;
