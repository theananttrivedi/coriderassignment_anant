import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { ChatMessage, ChatMetadataFirstTime } from "../types/types";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
import Topbar from "./Topbar";

const AppContainer = () => {
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
          setIsFirstTime((prevState) => {
            if (prevState) {
              setChatMetadata({
                from: response.data.from,
                message: response.data.message,
                name: response.data.name,
                status: response.data.status,
                to: response.data.to,
              });
            }
            return false;
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
      <Topbar chatMetadata={chatMetadata} />

      <Box flex="1" overflowY="auto" p="4" ref={chatContainerRef}>
        <VStack spacing={4} align="stretch">
          <ChatArea chats={chats} />
          <Spacer h={24} />
        </VStack>
      </Box>
      <Footer />
    </Flex>
  );
};

export default AppContainer;
