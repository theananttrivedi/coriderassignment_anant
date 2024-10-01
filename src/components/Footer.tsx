import { Flex, IconButton, Input } from "@chakra-ui/react";
import { GrAttachment } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";

function Footer() {
  return (
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
  );
}

export default Footer;
