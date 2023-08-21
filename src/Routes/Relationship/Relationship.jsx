import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPosts from "../../components/PopularPost/PopularPosts/PopularPosts";
import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";

function Relationship() {
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
          return post.category.name === "Relationship";
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
          "https://img.freepik.com/free-photo/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes_1157-51941.jpg?w=740&t=st=1692627529~exp=1692628129~hmac=7518be943b7caff7e8348a82876f4ebb913f9cc1afd3d9d1bae8ab8c16cbb17a"
        }
        title={"Relationship"}
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

export default Relationship;
