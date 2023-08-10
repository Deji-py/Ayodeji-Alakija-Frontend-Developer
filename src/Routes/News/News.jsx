import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPostsCard from "../../components/PopularPost/PopularPostsCard";
import TopHeadLines from "./Services/Api/TopHeadLines";
import topHeadLines from "./Services/Api/TopHeadLines";
import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Center,
  CircularProgress,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

function News() {
  const visiblePosts = 50;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); // Replace with your array of post
  const apiKey = "afbc86f9ee894a329c87e25fa76cca64";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const request = new Request(url);

  useEffect(() => {
    fetch(request)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPosts(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [posts, loading]);

  return (
    <Box>
      <BlogHero
        bgUri={
          "https://img.freepik.com/free-vector/global-technology-earth-news-bulletin-background_1017-33687.jpg?w=900&t=st=1691677868~exp=1691678468~hmac=9db4687f93fd3f3b28346aa53e5673df6447e8afbf67c1a99ffaa21aa50db9bc"
        }
        title={"News"}
      />
      <Box px={[4, 8, 12]} py={8}>
        {loading ? (
          <CircularProgress />
        ) : (
          <SimpleGrid columns={[1, 2, 2]} spacing={6}>
            {posts.slice(0, visiblePosts).map((post, key) => (
              <PopularPostsCard
                key={key}
                title={post.title}
                image={post.urlToImage}
                description={posts.description}
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
