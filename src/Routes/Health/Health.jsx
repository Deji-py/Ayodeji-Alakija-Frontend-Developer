import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPostsCard from "../../components/PopularPost/PopularPostsCard";
import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

function Health() {
  const [posts, setPosts] = useState([]); // Replace with your array of posts
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 6);
  };

  return (
    <Box>
      <BlogHero
        bgUri={
          "https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?w=826&t=st=1691678197~exp=1691678797~hmac=49d86c79430de0f581af34fa07f9849624378274d8fc299f6d1a941b1c7b76c3"
        }
        title={"Health"}
      />
      <Box px={[4, 8, 12]} py={8}>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {/* {posts.slice(0, visiblePosts).map((post) => (
            <PopularPostsCard key={post.id} post={post} />
          ))} */}
          <PopularPostsCard />
          <PopularPostsCard />
          <PopularPostsCard />
          <PopularPostsCard />
          <PopularPostsCard />
          <PopularPostsCard />
        </SimpleGrid>
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

export default Health;
