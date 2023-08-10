import Logo from "../../assets/logo.jpeg";
import { Search2Icon } from "@chakra-ui/icons";
import { Button, Center, Divider, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function EverHeader() {
  const route = useLocation();
  const navigation = [
    { label: "Home", path: "/" },
    { label: "News", path: "/news" },
    { label: "Lifestyle", path: "/lifestyle" },
    { label: "Health", path: "/health" },
    { label: "Relationship", path: "/relationship" },
    { label: "Making-Money-online", path: "/making-money-online" },
  ];

  return (
    <div
      className="header"
      style={{ position: "sticky", zIndex: "10000", top: "0" }}
    >
      <Flex padding={"10px"} bg="white" height={50}>
        <Center>
          <Image width={"140px"} src={Logo} alt="Dan Abramov" />
        </Center>
        <Spacer />
        <Button>
          <Search2Icon />
        </Button>
      </Flex>
      <Flex
        gap={3}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        overflowX={"scroll"}
        position="sticky"
        top={50}
        zIndex={1000}
        variant="unstyled"
        bg="white"
      >
        {navigation.map((item) => (
          <Link key={item.label} to={item.path}>
            <Button
              borderRadius={0}
              backgroundColor={"white"}
              textColor={item.path === route.pathname ? "red" : "black"}
              style={{ borderColor: "red" }}
              _hover={{
                borderBottom: "2px",
                transition: "ease 0.1s",
              }}
              borderBottom={item.path === route.pathname ? "2px" : "0px"}
              flex={"none"}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </Flex>
      <Divider />
    </div>
  );
}

export default EverHeader;
