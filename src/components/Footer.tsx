import { Box, Flex, HStack, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { GrAttachment, GrDocumentDownload } from "react-icons/gr";
import { LuVideo } from "react-icons/lu";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

function Footer() {
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  return (
    <Flex as="footer" py="2" mb={8} mx={4} bg="white" align="center">
      <Input
        border={"0"}
        placeholder="Reply to @Anant Trivedi"
        flex="1"
        mr="1"
      />

      <Box position={"relative"}>
        <Box
          display={showAttachmentMenu ? "block" : "none"}
          height={"44px"}
          position={"absolute"}
          bottom={"100%"}
          left={"50%"}
          transform={"translateX(-50%)"}
          rounded={"24px"}
          px={4}
          mb={4}
          backgroundColor={"#008000"}
        >
          <HStack spacing={4} height={"100%"}>
            <MdOutlinePhotoCamera size={24} color="white" />
            <LuVideo size={24} color="white" />
            <GrDocumentDownload size={20} color="white" />
          </HStack>
        </Box>
        <Box
          display={showAttachmentMenu ? "block" : "none"}
          height={"12px"}
          width={"12px"}
          position={"absolute"}
          bottom={"100%"}
          left={"50%"}
          mb={3}
          transform={"translateX(-50%) rotate(45deg);"}
          backgroundColor={"#008000"}
        ></Box>
        <IconButton
          as={"div"}
          onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
          aria-label="Attach"
          icon={<GrAttachment />}
          fontSize="20px"
          variant="ghost"
        />
      </Box>
      <IconButton
        aria-label="Send"
        icon={<VscSend />}
        fontSize="20px"
        variant="ghost"
      />
    </Flex>
  );
}

export default Footer;
