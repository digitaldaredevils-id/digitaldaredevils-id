import { HeadTitle } from "@/components/HeadTitle";
import { NavbarComponent } from "@/components/Navbar/NavbarList";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <HeadTitle
        title={"Unleashing the Digital Revolution"}
        description={
          "Build with a teams @didik and @zainal - Unleashing the Digital Revolution"
        }
      />

      <Box>
        <NavbarComponent />
      </Box>
    </>
  );
}
