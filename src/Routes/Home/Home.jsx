import MainSection from "../../components/MainSection/MainSection";
import PopularCategory from "../../components/EverPostCard/PopularCategory";
import PopularPosts from "../../components/PopularPost/PopularPosts/PopularPosts";
import PopularPostsCard from "../../components/PopularPost/PopularPostsCard";
import { Box, Flex, VStack, useMediaQuery } from "@chakra-ui/react";

function Home() {
  return (
    <Flex direction={"column"} gap={4} marginBottom={50}>
      <MainSection />
      <Flex px={2} direction={{ base: "column", md: "row" }} gap={4}>
        <VStack flex={1} align={{ base: "stretch", md: "flex-start" }}>
          <PopularCategory />
          <PopularCategory />
          <PopularCategory />
          <PopularCategory />
        </VStack>
        <Box mt={4}>
          <PopularPosts />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
