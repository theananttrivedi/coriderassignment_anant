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
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import {
  IoChevronBack,
  IoPencilOutline,
  IoAttachOutline,
  IoSend,
  IoEllipsisVertical,
  IoArrowBackOutline,
} from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

interface ChatSender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

interface ChatMessage {
  id: string;
  message: string;
  sender: ChatSender;
  time: string;
}

interface ChatTrip {
  chats: ChatMessage[];
}

interface ChatMetadataFirstTime {
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

function ChatSelfComponent({ text }: { text: string }) {
  return (
    <Box
      alignSelf="flex-end"
      bg="blue.500"
      color="white"
      p="2.5"
      rounded="12px"
      roundedBottomRight="0"
      shadow="md"
      maxWidth="90%"
    >
      <Text>{text}</Text>
    </Box>
  );
}

function ChatOtherComponent({
  text,
  imageItem,
}: {
  text: string;
  imageItem: string;
}) {
  return (
    <Box alignSelf="flex-start" maxWidth="90%">
      <Flex rowGap={"6"}>
        <Avatar
          position={"relative"}
          name="Sender"
          width={"36px"}
          height={"36px"}
          src={imageItem}
        >
          <Box bottom={"0%"} color={"blue"} left={"60%"} position={"absolute"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              className="size-6"
            >
              <path
                fill="blue"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Z"
              />

              <path
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.61 10.186a.75.75 0 0 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              />
            </svg>
          </Box>
        </Avatar>
        <Spacer mx={1} />
        <Box bg="white" p="2.5" rounded="12px" roundedTopLeft="0" shadow="md">
          <Text>{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

const App = () => {
  const [chats, setChats] = useState<ChatMessage[]>([]); // Store chat messages
  const [chatMetadata, setChatMetadata] = useState<ChatMetadataFirstTime>({
    from: "",
    message: "",
    name: "",
    status: "",
    to: "",
  });
  const [page, setPage] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const fetchChats = async (pageNumber: number) => {
    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${pageNumber}`
      );
      if (response.data?.chats) {
        setChats((prevChats) => [...prevChats, ...response.data.chats]);
        if (isFirstTime) {
          setIsFirstTime(false);
          setChatMetadata({
            from: response.data.from,
            message: response.data.message,
            name: response.data.name,
            status: response.data.status,
            to: response.data.to,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats(page);
  }, [page]);

  const handleScroll = () => {
    const container = chatContainerRef.current as HTMLDivElement;

    if (container) {
      const isAtBottom =
        container.scrollHeight - container.scrollTop === container.clientHeight;

      if (isAtBottom) {
        setPage((prevPage) => prevPage + 1);
        fetchChats(page + 1);
        console.log(page + 1);
      }
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current as HTMLDivElement;
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <Flex
      direction="column"
      height="100vh"
      width={"100vw"}
      fontFamily={"Mulish"}
      backgroundColor={"#FAF9F4"}
    >
      <Flex
        as="header"
        align="center"
        justify="space-between"
        ml={1}
        mr={2}
        mt={12}
      >
        <HStack alignItems={"center"}>
          <IconButton
            aria-label="Back"
            icon={<IoArrowBackOutline />}
            fontSize="24px"
            variant="ghost"
          />
          <Text fontSize="24px" fontWeight="bold">
            {chatMetadata?.name}
          </Text>
        </HStack>

        <IconButton
          aria-label="Edit"
          icon={<FiEdit />}
          fontSize="24px"
          variant="ghost"
        />
      </Flex>

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
          <Avatar name="Trip Avatar" height="48px" width={"48px"} />
          <VStack spacing={0} align="start">
            <Text color={"#606060"} fontSize="16px" fontWeight="medium">
              From{" "}
              <Text
                color={"#141E0D"}
                fontSize={"18px"}
                fontWeight={"bold"}
                as={"span"}
              >
                {chatMetadata?.from}
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
                {chatMetadata?.to}
              </Text>
            </Text>
          </VStack>
        </HStack>

        <IconButton
          aria-label="Menu"
          icon={<IoEllipsisVertical />}
          fontSize="24px"
          variant="ghost"
        />
      </Flex>

      <Box flex="1" overflowY="auto" p="4" ref={chatContainerRef}>
        <VStack spacing={4} align="stretch">
          <Flex
            position="relative"
            justify="center"
            borderBottom="1px"
            color="#B7B7B7"
            height="16px"
          >
            <Text
              position="absolute"
              height="fit-content"
              top="4px"
              px={4}
              backgroundColor="#FAF9F4"
              color="#b7b7b7"
              fontSize="14px"
              fontWeight="medium"
            >
              12 JAN, 2024
            </Text>
          </Flex>
          <Spacer mb={4} />

          {chats.map((chatItem, _) => {
            if (chatItem.sender.self) {
              return (
                <ChatSelfComponent key={chatItem.id} text={chatItem.message} />
              );
            }
            return (
              <ChatOtherComponent
                key={chatItem.id}
                imageItem={chatItem.sender.image}
                text={chatItem.message}
              />
            );
          })}
        </VStack>
      </Box>
    </Flex>
  );
};

export default App;
