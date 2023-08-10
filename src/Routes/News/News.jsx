import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPostsCard from "../../components/PopularPost/PopularPostsCard";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Center,
  CircularProgress,
  Input,
  SimpleGrid,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function FancySearchInput() {
  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="Search"
        size="md"
        borderRadius="full"
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        _placeholder={{ color: "gray.500" }}
      />
      <InputRightElement width="3rem">
        <SearchIcon color="gray.500" />
      </InputRightElement>
    </InputGroup>
  );
}

function News() {
  const visiblePosts = 50;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); // Replace with your array of post
  const apiKey = "L0d0r6vJBe1TXq7m0hx_hoqea2eAEM0uzrpo62bhZ6U";
  const url =
    "https://api.newscatcherapi.com/v2/search?q=Apple&from=2021/12/15&countries=CA&page_size=1";

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
      headers: {
        "x-api-key": apiKey,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPosts(response.data.articles);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Box>
      <BlogHero
        bgUri={
          "https://img.freepik.com/free-vector/global-technology-earth-news-bulletin-background_1017-33687.jpg?w=900&t=st=1691677868~exp=1691678468~hmac=9db4687f93fd3f3b28346aa53e5673df6447e8afbf67c1a99ffaa21aa50db9bc"
        }
        title={"News"}
      />
      {/* <FancySearchInput /> */}
      <Box px={[4, 8, 12]} py={8}>
        {loading ? (
          <CircularProgress />
        ) : (
          <SimpleGrid columns={[1, 2, 2]} spacing={6}>
            {posts.slice(0, visiblePosts).map((post, key) => (
              <PopularPostsCard
                key={post._id}
                topic={post.topic}
                title={post.title}
                image={post.media}
                datePosted={new Date(post.published_date).toLocaleDateString(
                  "en-US"
                )}
                description={posts.summary}
              />
            ))}
          </SimpleGrid>
        )}
        {visiblePosts < posts.length && (
          <Center mt={8}>
            <Button onClick={loadMorePosts} colorScheme="teal">
              Load More
            </Button>
          </Center>
        )}
      </Box>
    </Box>
  );
}

export default News;
