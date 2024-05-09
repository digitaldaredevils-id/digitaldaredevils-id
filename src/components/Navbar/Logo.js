import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Box>
      <Image
        src="/logo.webp"
        width={100}
        height={100}
        alt="Digital Daredevils"
      />
    </Box>
  );
};
