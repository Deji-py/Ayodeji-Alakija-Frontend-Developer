import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPosts from "../../components/PopularPost/PopularPosts/PopularPosts";
import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";

function News() {
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
        let news = posts.filter((post) => {
          return post.category.name === "News";
        });
        setData(news);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Flex direction={"column"} gap={4} marginBottom={50}>
      <BlogHero
        bgUri={
          "https://img.freepik.com/premium-photo/virtual-tv-studio-news_327072-285.jpg?w=826"
        }
        title={"News"}
      />
      <Center>
        <Flex px={2} direction={{ base: "column", md: "row" }} gap={4}>
          <Box flex={1} mt={4}>
            <PopularPosts data={data} />
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
}

export default News;
