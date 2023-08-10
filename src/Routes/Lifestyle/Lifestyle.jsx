import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPostsCard from "../../components/PopularPost/PopularPostsCard";
import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

function LifeStyle() {
  const [posts, setPosts] = useState([]); // Replace with your array of posts
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 6);
  };

  return (
    <Box>
      <BlogHero
        bgUri={
          "https://img.freepik.com/free-photo/happy-black-parents-with-kids-making-video-call-smart-phone-home_637285-11501.jpg?w=740&t=st=1691678080~exp=1691678680~hmac=1692c37d28b10dc5c826c24b52770c2e41d0307358174e8fdae3edfdce420cde"
        }
        title={"LifeStyle"}
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

export default LifeStyle;
