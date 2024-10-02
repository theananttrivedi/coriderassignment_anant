import React, { useMemo } from "react";
import { Flex, Text, Spacer, Box, HStack } from "@chakra-ui/react";
import { ChatMessage } from "../types/types";
import formatDate from "../utils/formatDate";
import ChatOtherComponent from "./ChatOtherComponent";
import ChatSelfComponent from "./ChatSelfComponent";

const DateSeparator = React.memo(({ date }: { date: string }) => (
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
        {date}
      </Text>
    </Flex>
    <Spacer mb={4} />
  </>
));

const ChatMessageItem = React.memo(
  ({ chatItem }: { chatItem: ChatMessage }) => {
    if (chatItem.sender.self) {
      return (
        <HStack justify="flex-end" w={"100%"}>
          <ChatSelfComponent chatItem={chatItem} />
        </HStack>
      );
    }
    return (
      <HStack justify="flex-start" w={"100%"}>
        <ChatOtherComponent chatItem={chatItem} />
      </HStack>
    );
  }
);

function ChatArea({ chats }: { chats: ChatMessage[] }) {
  const memoizedChats = useMemo(() => {
    let previousDate: string | null = null;
    return chats.map((chatItem) => {
      const currentDate = chatItem.time.split(" ")[0];
      const showDateComponent = previousDate !== currentDate;
      if (showDateComponent) {
        previousDate = currentDate;
      }
      return { chatItem, showDateComponent };
    });
  }, [chats]);

  return (
    <>
      {memoizedChats.map(({ chatItem, showDateComponent }) => (
        <Box key={chatItem.id}>
          {showDateComponent && (
            <DateSeparator date={formatDate(chatItem.time)} />
          )}
          <ChatMessageItem chatItem={chatItem} />
        </Box>
      ))}
    </>
  );
}

export default React.memo(ChatArea);
