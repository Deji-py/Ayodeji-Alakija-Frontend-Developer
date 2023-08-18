import ContentPlaceholder from "../../Placeholders/ContentPlaceholder";
import PopularPostsCard from "../PopularPostsCard";
import React from "react";
import { Text, VStack } from "@chakra-ui/react";

function PopularPosts({ data }) {
  if (!data) {
    return <ContentPlaceholder />;
  }
  return (
    <VStack>
      <Text fontSize={"2xl"} color={"red"} fontWeight={"bold"}>
        Popular Posts
      </Text>
      {data && (
        <>
          {data.reverse().map((item) => (
            <PopularPostsCard
              key={item._id}
              datePosted={item.publishedAt}
              topic={item.category.name}
              title={item.title}
              image={item.image.asset.url}
              slug={item.slug.current}
            />
          ))}
        </>
      )}
    </VStack>
  );
}

export default PopularPosts;
