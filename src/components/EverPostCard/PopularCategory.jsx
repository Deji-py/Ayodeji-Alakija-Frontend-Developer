import EverBigPostCard from "../../components/EverPostCard/EverBigPostCard";
import EverPostCardSmall from "../../components/EverPostCard/EverPostCardSmall";
import { Divider, Flex, Text, VStack } from "@chakra-ui/react";

function PopularCategory() {
  return (
    <Flex flex={1} marginTop={50} direction={"column"}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={2} p={3}>
        <Text fontWeight={"bold"} color={"black"} fontSize={"2xl"}>
          Health
        </Text>
        <Divider bg={"gray"} />
        <Text
          flex={"none"}
          color={"red"}
          decoration={"underline"}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>
      <Flex direction={{ md: "row", base: "column" }} gap={1}>
        <Flex flex={1}>
          <EverBigPostCard />
        </Flex>
        <VStack>
          <EverPostCardSmall />
          <EverPostCardSmall />
          <EverPostCardSmall />
        </VStack>
      </Flex>
    </Flex>
  );
}

export default PopularCategory;
