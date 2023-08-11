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



function News() {
  const visiblePosts = 50;
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]); // Replace with your array of post
 

  return (
    <Box>
      {/* <BlogHero
        bgUri={
          "https://img.freepik.com/free-vector/global-technology-earth-news-bulletin-background_1017-33687.jpg?w=900&t=st=1691677868~exp=1691678468~hmac=9db4687f93fd3f3b28346aa53e5673df6447e8afbf67c1a99ffaa21aa50db9bc"
        }
        title={"News"}
      />
      <Box px={[4, 8, 12]} py={8}>
        <Center>
          <FancySearchInput />
        </Center>
        {loading ? (
          <Center flex={1}>
            <CircularProgress value={10} />
          </Center>
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
      </Box> */}
    </Box>
  );
}

export default News;
