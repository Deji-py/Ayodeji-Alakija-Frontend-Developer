import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPosts from "../../components/PopularPost/PopularPosts/PopularPosts";
import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";

function Health() {
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
          return post.category.name === "Health";
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
          "https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?w=826&t=st=1691678197~exp=1691678797~hmac=49d86c79430de0f581af34fa07f9849624378274d8fc299f6d1a941b1c7b76c3"
        }
        title={"Health"}
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

export default Health;
