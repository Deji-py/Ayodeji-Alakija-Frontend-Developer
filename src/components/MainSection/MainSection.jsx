import BigCard from "./BigCard";
import React from "react";
import SmallCard from "./SmallCard";
import { Divider, Flex, Text, VStack } from "@chakra-ui/react";

function MainSection() {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        pt={5}
        px={3}
      >
        <Text fontWeight={"bold"} color={"black"} fontSize={"2xl"}>
          Trending
        </Text>
        <Divider height={0.5} bg={"red"} />
      </Flex>
      <Flex
        height={{ base: "fit-content", md: "400px" }}
        direction={{ base: "column", md: "row" }} // Use base for mobile and md for desktop
        gap={"0"}
        overflow={"hidden"}
      >
        <BigCard />
        <Flex
          padding={"1"}
          overflow={"scroll"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          width={{ base: "100%", md: "60%" }}
          gap={"1"}
        >
          <Flex direction={{ base: "row", md: "column" }} gap={"1"} flex={"1"}>
            <SmallCard />
            <SmallCard />
          </Flex>
          <Flex direction={{ base: "row", md: "column" }} gap={"1"} flex={"1"}>
            <SmallCard />
            <SmallCard />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default MainSection;
