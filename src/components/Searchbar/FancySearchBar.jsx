import { SearchIcon } from "@chakra-ui/icons";
import { Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function FancySearchInput() {
  return (
    <Center mt={10} p={5}>
      <InputGroup width={{ base: "100%", md: 400 }}>
        <Input
          type="text"
          placeholder="Search"
          size="md"
          borderRadius="10"
          bg="white"
          height={50}
          border="1px solid"
          borderColor="gray.200"
          _placeholder={{ color: "gray.500" }}
        />
        <InputRightElement
          borderRadius="10"
          height={"100%"}
          width="3rem"
          background={"red"}
        >
          <SearchIcon color="white" />
        </InputRightElement>
      </InputGroup>
    </Center>
  );
}

export default FancySearchInput;
