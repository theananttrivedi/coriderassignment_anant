import {
  Box,
  Flex,
  IconButton,
  Text,
  Avatar,
  Input,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import {
  IoChevronBack,
  IoPencilOutline,
  IoAttachOutline,
  IoSend,
  IoEllipsisVertical,
  IoArrowBackOutline,
} from "react-icons/io5";

const App = () => {
  return (
    <Flex
      direction="column"
      height="100vh"
      width={"100vw"}
      fontFamily={"Mulish"}
      backgroundColor={"#FAF9F4"}
    >
      {/* Top Bar */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        ml={1}
        mr={2}
        mt={4}
        // borderBottom="1px"
        // borderColor="gray.200"
      >
        <HStack alignItems={"center"}>
          {/* Back Button */}
          <IconButton
            aria-label="Back"
            icon={<IoArrowBackOutline />}
            fontSize="24px"
            variant="ghost"
          />
          {/* Trip Number */}
          <Text fontSize="24px" fontWeight="bold">
            Trip 1
          </Text>
        </HStack>

        {/* Edit Icon */}
        <IconButton
          aria-label="Edit"
          icon={<FiEdit />}
          fontSize="24px"
          variant="ghost"
        />
      </Flex>

      {/* Trip Info Row */}
      <Flex
        align="center"
        justify="space-between"
        mt={2}
        ml={4}
        mr={2}
        pb={4}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <HStack>
          {/* Round Icon (Image Placeholder) */}
          <Avatar name="Trip Image" height="48px" width={"48px"} />
          <VStack spacing={0} align="start">
            <Text color={"#606060"} fontSize="16px" fontWeight="medium">
              From{" "}
              <Text
                color={"#141E0D"}
                fontSize={"18px"}
                fontWeight={"bold"}
                as={"span"}
              >
                New York
              </Text>
            </Text>
            <Text color={"#606060"} fontSize="16px" fontWeight="medium">
              To{" "}
              <Text
                color={"#141E0D"}
                fontSize={"18px"}
                fontWeight={"bold"}
                as={"span"}
              >
                San Francisco
              </Text>
            </Text>
          </VStack>
        </HStack>
        {/* Vertical Kebab Menu */}
        <IconButton
          aria-label="Menu"
          icon={<IoEllipsisVertical />}
          fontSize="24px"
          variant="ghost"
        />
      </Flex>

      {/* Scrollable Chat Area */}
      <Box flex="1" overflowY="auto" p="4">
        <VStack spacing={4} align="stretch">
          {/* Example Chat Bubbles */}
          <Box
            alignSelf="flex-start"
            bg="white"
            p="2"
            rounded="md"
            roundedTopLeft={"0"}
            shadow="md"
            maxWidth="70%"
          >
            <Text>Hello, how are you?</Text>
          </Box>
          <Box
            alignSelf="flex-end"
            bg="blue.500"
            color="white"
            p="2"
            rounded="md"
            roundedBottomRight={"0"}
            shadow="md"
            maxWidth="70%"
          >
            <Text>I'm good, thanks!</Text>
          </Box>
          {/* Add more chat bubbles here */}
        </VStack>
      </Box>

      {/* Chat Input Bar */}
      <Flex
        as="footer"
        p="4"
        borderTop="1px"
        borderColor="gray.200"
        bg="white"
        align="center"
      >
        <Input placeholder="Type a message" flex="1" mr="2" />
        {/* Attachment Icon */}
        <IconButton
          aria-label="Attach"
          icon={<IoAttachOutline />}
          fontSize="24px"
          variant="ghost"
        />
        {/* Send Icon */}
        <IconButton
          aria-label="Send"
          icon={<IoSend />}
          fontSize="24px"
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
};

export default App;
