import { Flex, Text, Spacer, Box, HStack } from "@chakra-ui/react";
import { ChatMessage } from "../types/types";
import formatDate from "../utils/formatDate";
import ChatOtherComponent from "./ChatOtherComponent";
import ChatSelfComponent from "./ChatSelfComponent";

function ChatArea({ chats }: { chats: ChatMessage[] }) {
  let previousDate: string | null = null;
  let showDateComponent = false;
  return chats.map((chatItem, _) => {
    showDateComponent = false;
    const currentDate = chatItem.time.split(" ")[0];

    if (previousDate !== currentDate) {
      previousDate = currentDate;
      showDateComponent = true;
    }

    if (chatItem.sender.self) {
      return (
        <Box key={chatItem.id}>
          {showDateComponent && (
            <>
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
                  {formatDate(chatItem.time)}
                </Text>
              </Flex>
              <Spacer mb={4} />
            </>
          )}
          <HStack justify="flex-end" w={"100%"}>
            <ChatSelfComponent chatItem={chatItem} />
          </HStack>
        </Box>
      );
    }
    return (
      <Box key={chatItem.id}>
        {showDateComponent && (
          <>
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
                {formatDate(chatItem.time)}
              </Text>
            </Flex>
            <Spacer mb={4} />
          </>
        )}
        <HStack justify="flex-start" w={"100%"}>
          <ChatOtherComponent chatItem={chatItem} />
        </HStack>
      </Box>
    );
  });
}

export default ChatArea;
