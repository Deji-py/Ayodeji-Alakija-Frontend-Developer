import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPosts from "../../components/PopularPost/PopularPosts/PopularPosts";
import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";

function LifeStyle() {
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
          return post.category.name === "Lifestyle";
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
          "https://img.freepik.com/free-photo/happy-black-parents-with-kids-making-video-call-smart-phone-home_637285-11501.jpg?w=740&t=st=1691678080~exp=1691678680~hmac=1692c37d28b10dc5c826c24b52770c2e41d0307358174e8fdae3edfdce420cde"
        }
        title={"LifeStyle"}
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

export default LifeStyle;
