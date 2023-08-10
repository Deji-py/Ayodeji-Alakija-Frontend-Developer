import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

function SmallCard() {
  return (
    <Box
      overflow={"hidden"}
      width={{ base: "350px", md: "100%" }}
      height={{ base: "200px", md: "100%" }}
      position={"relative"}
    >
      <Box
        zIndex={"1000"}
        pos={"absolute"}
        bg={"orange"}
        px={"6px"}
        py={"4px"}
        top={"5"}
        left={"5"}
        fontSize={"15px"}
      >
        category
      </Box>
      <Box
        pos={"absolute"}
        top={"0"}
        width={"100%"}
        left={0}
        bg="black"
        opacity={"0.8"}
        height={"100%"}
      ></Box>
      <Image
        width={"100%"}
        fit={"cover"}
        height={"100%"}
        src="https://img.freepik.com/free-photo/coffee-shop-cafe-latte-cappuccino-newspaper-concept_53876-31818.jpg?w=360&t=st=1691613522~exp=1691614122~hmac=b6aed458b9842c22f1051cd51fde6dd3ed98fe6ab7b6c5d3834b88e6dfbb6d29"
      />
      <VStack left={"5"} pos={"absolute"} bottom={"5"} align={"self-start"}>
        <Box fontSize={"large"} color={"white"}>
          lorem ipsum dolor amet
        </Box>
        <Box fontSize={"sm"} color={"whitesmoke"}>
          20 Aug, 2023
        </Box>
      </VStack>
    </Box>
  );
}

export default SmallCard;
