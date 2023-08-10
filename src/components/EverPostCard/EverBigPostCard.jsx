import React from "react";
import { Box, Image, VStack } from "@chakra-ui/react";

export default function EverBigPostCard() {
  return (
    <Box
      pos={"relative"}
      width={"100%"}
      ml={1}
      flex={{ base: "none", md: "1" }}
      bg={"red"}
      overflow={"hidden"}
    >
      <Box
        zIndex={"1000"}
        pos={"absolute"}
        bg={"yellow"}
        px={"6px"}
        py={"4px"}
        top={"5"}
        left={"5"}
        fontSize={"15px"}
        boxShadow={
          "0px 0px 10px rgba(0, 0, 0, 0.25), 0px 0px 10px rgba(0, 0, 0, 0.25)"
        }
      >
        category
      </Box>
      <Box
        pos={"absolute"}
        top={"0"}
        width={"100%"}
        left={0}
        bgGradient={
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%, )"
        }
        opacity={"0.8"}
        height={"100%"}
      ></Box>
      <Image
        width={"100%"}
        fit={"cover"}
        height={"100%"}
        src="https://img.freepik.com/free-photo/portrait-man-glasses-attentively-looking-phone-reeading-message-isolated-blue-background-neon-lights-concept-human-emotions-facial-expression-lifestyle-copy-space-ad_231208-14369.jpg?w=740&t=st=1691665547~exp=1691666147~hmac=666b7a6de54cfa86815db78b7207e946336056f508457112bfd52151c6798876"
      />
      <VStack left={"5"} pos={"absolute"} bottom={"5"} align={"self-start"}>
        <Box fontSize={"x-large"} color={"white"}>
          lorem ipsum dolor amet
        </Box>
        <Box fontSize={"sm"} color={"whitesmoke"}>
          20 Aug, 2023
        </Box>
      </VStack>
    </Box>
  );
}
