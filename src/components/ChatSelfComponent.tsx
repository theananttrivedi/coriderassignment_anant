import { Box, Text } from "@chakra-ui/react";

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

export default ChatSelfComponent;
