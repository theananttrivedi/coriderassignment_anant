import { Flex, Text, Spacer } from "@chakra-ui/react";
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
        <>
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

          <ChatSelfComponent key={chatItem.id} text={chatItem.message} />
        </>
      );
    }
    return (
      <>
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
        <ChatOtherComponent
          is_kyc_verified={chatItem.sender.is_kyc_verified}
          key={chatItem.id}
          imageItem={chatItem.sender.image}
          text={chatItem.message}
        />
      </>
    );
  });
}

export default ChatArea;
