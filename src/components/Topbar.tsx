import {
  Flex,
  IconButton,
  Text,
  Avatar,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { FiEdit } from "react-icons/fi";
import { IoEllipsisVertical, IoArrowBackOutline } from "react-icons/io5";
import { ChatMetadataFirstTime } from "../types/types";

function Topbar({ chatMetadata }: { chatMetadata: ChatMetadataFirstTime }) {
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

        <IconButton
          aria-label="Menu"
          icon={<IoEllipsisVertical />}
          fontSize="24px"
          variant="ghost"
        />
      </Flex>
    </>
  );
}

export default Topbar;
