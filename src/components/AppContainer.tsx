import { Box, Flex, VStack, Spinner, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { ChatMessage, ChatMetadataFirstTime } from "../types/types";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
import Topbar from "./Topbar";

const AppContainer = () => {
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [chatMetadata, setChatMetadata] = useState<ChatMetadataFirstTime>({
    from: "",
    message: "",
    name: "",
    status: "",
    to: "",
  });
  const [page, setPage] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const previousHeightRef = useRef<number>(0);

  const fetchChats = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${pageNumber}`
      );
      if (response.data?.chats) {
        const newChats = response.data.chats;
        setChats((prevChats) => [...newChats, ...prevChats]);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading) {
            setPage((prevPage) => prevPage + 1);
          }
        });
      },
      {
        root: chatContainerRef.current,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const loadingElement = loadingRef.current;

    if (loadingElement) {
      observer.observe(loadingElement);
    }

    return () => {
      if (loadingElement) {
        observer.unobserve(loadingElement);
      }
    };
  }, [loading]);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      if (isFirstTime) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      } else {
        const newHeight = chatContainer.scrollHeight;
        const heightDifference = newHeight - previousHeightRef.current;
        chatContainer.scrollTop += heightDifference;
      }
      previousHeightRef.current = chatContainer.scrollHeight;
    }
  }, [chats, isFirstTime]);

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
          <Box ref={loadingRef} height="20px" width="100%">
            {loading && <Spinner mx={"auto"} size="lg" color="blue.500" />}
          </Box>
          <ChatArea chats={chats} />
        </VStack>
        <Spacer h={24} />
      </Box>
      <Footer />
    </Flex>
  );
};

export default AppContainer;
