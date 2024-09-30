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

const App = () => {
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
            Trip 1
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

        <IconButton
          aria-label="Menu"
          icon={<IoEllipsisVertical />}
          fontSize="24px"
          variant="ghost"
        />
      </Flex>

      <Box flex="1" overflowY="auto" p="4">
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

          <Box alignSelf="flex-start" maxWidth="90%">
            <Flex rowGap={"6"}>
              <Avatar
                position={"relative"}
                name="Sender"
                width={"36px"}
                height={"36px"}
              >
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
              </Avatar>
              <Spacer mx={1} />
              <Box
                bg="white"
                p="2.5"
                rounded="12px"
                roundedTopLeft="0"
                shadow="md"
              >
                <Text>
                  Hello, how are you? Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Voluptate iusto nesciunt inventore, maiores
                  beatae excepturi doloribus cum eaque nulla soluta eum quod,
                  quis eveniet sapiente adipisci, quasi quisquam aut aliquam.
                </Text>
              </Box>
            </Flex>
          </Box>

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
            <Text>
              I'm good, thanks! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Atque, veritatis est doloremque doloribus sequi
              odit ab, enim omnis fuga, corrupti expedita sit quam fugiat quasi
              consectetur eos ea hic quas.
            </Text>
          </Box>
        </VStack>
      </Box>

      <Flex as="footer" py="2" mb={8} mx={4} bg="white" align="center">
        <Input
          border={"0"}
          placeholder="Reply to @Anant Trivedi"
          flex="1"
          mr="1"
        />

        <IconButton
          aria-label="Attach"
          icon={<GrAttachment />}
          fontSize="20px"
          variant="ghost"
        />
        <IconButton
          aria-label="Send"
          icon={<VscSend />}
          fontSize="20px"
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
};

export default App;
