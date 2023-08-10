import PopularPostsCard from "../PopularPostsCard";
import React from "react";
import { Text, VStack } from "@chakra-ui/react";

function PopularPosts() {
  return (
    <VStack>
      <Text fontSize={"2xl"} color={"red"} fontWeight={"bold"}>
        Popular Posts
      </Text>
      <PopularPostsCard />
      <PopularPostsCard />
      <PopularPostsCard />
      <PopularPostsCard />
      <PopularPostsCard />
      <PopularPostsCard />
    </VStack>
  );
}

export default PopularPosts;
