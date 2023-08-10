import BlogHero from "../../components/BlogHero/BlogHero";
import PopularPostsCard from "../../components/PopularPost/PopularPostsCard";
import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

function Money() {
  const [posts, setPosts] = useState([]); // Replace with your array of posts
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 6);
  };

  return (
    <Box>
      <BlogHero
        bgUri={
          "https://img.freepik.com/premium-photo/growth-digital-money-chart-stock-financial-market-business-arrow-success-investment-background-with-finance-graph-diagram-economy-currency-profit-increase-economic-exchange-coin-price-strategy_79161-2480.jpg?w=900"
        }
        title={"Making Money Online"}
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

export default Money;
