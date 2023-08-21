import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPosts from "../../components/PopularPost/PopularPosts/PopularPosts";
import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";

function Money() {
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
          return post.category.name === "Making Money Online";
        });
        setData(news);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Box>
      <BlogHero
        bgUri={
          "https://img.freepik.com/premium-photo/black-man-doing-financial-calculations_216356-631.jpg?w=740"
        }
        title={"Money"}
      />
      <Center>
        <Flex px={2} direction={{ base: "column", md: "row" }} gap={4}>
          <Box flex={1} mt={4}>
            <PopularPosts data={data} />
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}

export default Money;
