import {
  Flex,
  IconButton,
  Text,
  Avatar,
  HStack,
  VStack,
  Box,
} from "@chakra-ui/react";

import { FiEdit } from "react-icons/fi";
import {
  IoEllipsisVertical,
  IoArrowBackOutline,
  IoCallOutline,
} from "react-icons/io5";
import { ChatMetadataFirstTime } from "../types/types";
import { useState } from "react";
import { LuUsers } from "react-icons/lu";
import { BiMessageX } from "react-icons/bi";

function Topbar({ chatMetadata }: { chatMetadata: ChatMetadataFirstTime }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {" "}
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
        <Box position={"relative"}>
          <IconButton
            as={"div"}
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Menu"
            icon={<IoEllipsisVertical />}
            fontSize="24px"
            variant="ghost"
          />
          {showMenu && (
            <Box
              border={"2px"}
              borderColor={"#E5E5E0"}
              borderBottom={0}
              position="absolute"
              zIndex={10}
              backgroundColor={"white"}
              mt={2}
              top="100%"
              right="0"
              rounded={"8px"}
              width="180px"
              shadow="md"
            >
              <HStack
                spacing={3}
                roundedTop={"8px"}
                width={"100%"}
                height={"48px"}
                pl={4}
                py={2}
                borderBottom={"1px"}
                borderColor={"#E5E5E0"}
              >
                <LuUsers size={20} />
                <Text fontWeight={"semibold"}>Members</Text>
              </HStack>

              <HStack
                spacing={3}
                height={"48px"}
                pl={4}
                py={2}
                borderBottom={"1px"}
                borderColor={"#E5E5E0"}
              >
                <IoCallOutline size={20} />

                <Text fontWeight={"semibold"}>Share Number</Text>
              </HStack>
              <HStack
                spacing={3}
                height={"48px"}
                roundedBottom={"8px"}
                width={"100%"}
                pl={4}
                py={2}
                borderBottom={"1px"}
                borderColor={"#E5E5E0"}
              >
                <BiMessageX size={20} />
                <Text fontWeight={"semibold"}>Report</Text>
              </HStack>
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default Topbar;
