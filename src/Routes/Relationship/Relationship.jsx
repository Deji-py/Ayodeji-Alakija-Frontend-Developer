import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPostsCard from "../../components/PopularPost/PopularPostsCard";
import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

function Relationship() {
  const [posts, setPosts] = useState([]); // Replace with your array of posts
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 6);
  };

  return (
    <Box>
      <BlogHero
        bgUri={
          "https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?w=740&t=st=1691678449~exp=1691679049~hmac=236e31f6bd6b90b92c26a6e8c814af17127dfad1338b5d66703f51efd6da3d04"
        }
        title={"Relationship"}
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

export default Relationship;
