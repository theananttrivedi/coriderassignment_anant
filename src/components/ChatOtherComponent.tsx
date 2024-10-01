import { Box, Flex, Text, Avatar, Spacer } from "@chakra-ui/react";

function ChatOtherComponent({
  text,
  imageItem,
  is_kyc_verified,
}: {
  text: string;
  imageItem: string;
  is_kyc_verified: boolean;
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
          {is_kyc_verified && (
            <Box
              bottom={"0%"}
              color={"blue"}
              left={"60%"}
              position={"absolute"}
            >
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
          )}
        </Avatar>
        <Spacer mx={1} />
        <Box bg="white" p="2.5" rounded="12px" roundedTopLeft="0" shadow="md">
          <Text>{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default ChatOtherComponent;
