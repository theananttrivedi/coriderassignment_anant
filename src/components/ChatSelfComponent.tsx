import { Box, Text } from "@chakra-ui/react";
import { ChatMessage } from "../types/types";

function ChatSelfComponent({ chatItem }: { chatItem: ChatMessage }) {
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
      <Text>{chatItem.message}</Text>
    </Box>
  );
}

export default ChatSelfComponent;
