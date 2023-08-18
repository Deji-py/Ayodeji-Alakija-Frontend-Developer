import FancySearchInput from "../../components/Searchbar/FancySearchBar";
import MainSection from "../../components/MainSection/MainSection";
import PopularCategory from "../../components/EverPostCard/PopularCategory";
import PopularPosts from "../../components/PopularPost/PopularPosts/PopularPosts";
import getImageUrlFromSanity from "../../Services/getSanityImage";
import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
                _id,
                title,
                slug,
                category->{_id, name},
                publishedAt,
                author,
                image {
                  asset -> {
                    url
                  }
                },
                body,
            }`
      )
      .then((posts) => {
        setData(posts);
        console.log(posts);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Flex direction={"column"} gap={4} marginBottom={50}>
      <MainSection />
      <Center>
        <Flex px={2} direction={{ base: "column", md: "row" }} gap={4}>
          <Box flex={1} mt={4}>
            <PopularPosts data={data} />
          </Box>
          <VStack
            w={{ base: "100%", md: "40%" }}
            align={{ base: "stretch", md: "flex-start" }}
          >
            <PopularCategory />
            <PopularCategory />
            <PopularCategory />
            <PopularCategory />
          </VStack>
        </Flex>
      </Center>
    </Flex>
  );
}

export default Home;
