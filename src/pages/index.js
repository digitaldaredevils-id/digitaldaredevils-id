import { HeadTitle } from "@/components/HeadTitle";
import Hero from "@/components/Hero";
import { NavbarComponent } from "@/components/Navbar/NavbarList";
import { RecentWorksViews } from "@/views";
import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bgColor={"gray.100"}>
      <HeadTitle
        title={"Unleashing the Digital Revolution"}
        description={
          "Build with a teams @didik and @zainal - Unleashing the Digital Revolution"
        }
      />

      <Container maxW={"1024px"}>
        <NavbarComponent />
        <Hero />

        <RecentWorksViews />
      </Container>
    </Box>
  );
}
