import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function SimpleAccordion() {
  const data = [
    {
      id: 1,
      title: "Apa itu software house?",
      description: "Sebuah software house adalah perusahaan yang berfokus pada pengembangan perangkat lunak atau aplikasi komputer. Kami menyediakan layanan pengembangan custom software, aplikasi web, dan mobile untuk berbagai kebutuhan bisnis."
    },
    {
      id: 2,
      title: "Apa saja layanan yang ditawarkan oleh software house kami?",
      description: `Kami menawarkan berbagai layanan pengembangan perangkat lunak, termasuk:
        - Pengembangan Custom Software: Kami dapat membantu Anda mengembangkan perangkat lunak sesuai dengan kebutuhan bisnis Anda, dari aplikasi desktop hingga aplikasi berbasis cloud.
        - Pengembangan Aplikasi Web: Kami dapat membuat aplikasi web yang interaktif dan responsif menggunakan teknologi-teknologi terbaru.
        - Pengembangan Aplikasi Mobile: Kami dapat membuat aplikasi mobile untuk platform Android dan iOS.
      `
    },
    {
      id: 3,
      title: "Bagaimana proses pengembangan perangkat lunak di software house kami?",
      description: `Proses pengembangan perangkat lunak kami meliputi langkah-langkah berikut:
        - Analisis Kebutuhan: Kami akan bekerja sama dengan Anda untuk memahami dan mengidentifikasi kebutuhan bisnis Anda secara mendalam.
        Perancangan: Kami akan merancang arsitektur, struktur database, dan antarmuka pengguna yang sesuai dengan kebutuhan Anda.
        - Implementasi: Tim kami akan mengembangkan perangkat lunak menggunakan bahasa pemrograman dan teknologi yang relevan.
        - Pengujian dan Debugging: Kami akan melakukan pengujian terperinci untuk memastikan kualitas perangkat lunak, serta melakukan debugging jika ditemukan bug atau error.
        - Deployment dan Maintenance: Setelah perangkat lunak siap, kami akan membantu dalam proses deployment dan menyediakan pemeliharaan rutin untuk memastikan kinerja yang optimal.
      `
    },
    {
      id: 4,
      title: "Apakah software house kami menerima pengembangan perangkat lunak skala kecil maupun besar?",
      description: "Ya, kami menyediakan layanan pengembangan perangkat lunak untuk skala kecil maupun besar. Kami memiliki pengalaman dalam mengembangkan berbagai jenis proyek, mulai dari solusi perangkat lunak sederhana hingga sistem yang kompleks dan skala enterprise."
    },
    {
      id: 5,
      title: "Apakah software house kami mampu mengembangkan aplikasi untuk platform mobile?",
      description: "Ya, kami memiliki tim pengembangan yang terampil dalam mengembangkan aplikasi mobile untuk platform Android dan iOS. Kami dapat membantu Anda merancang dan mengembangkan aplikasi mobile yang responsif dan kaya fitur."
    },
    {
      id: 6,
      title: "Bagaimana dengan keamanan data pada aplikasi yang dikembangkan oleh software house kami?",
      description: "Keamanan data adalah prioritas kami. Kami mengimplementasikan praktik-praktik terbaik dalam pengembangan perangkat lunak untuk melindungi data pelanggan kami, mulai dari enkripsi data hingga kebijakan akses yang ketat."
    },
    {
      id: 7,
      title: "Bagaimana cara menghubungi kami untuk mendapatkan layanan pengembangan perangkat lunak?",
      description: "Anda dapat menghubungi kami melalui halaman Kontak di website kami atau mengirimkan email ke alamat yang tercantum. Tim kami akan dengan senang hati membantu Anda dan memberikan solusi terbaik untuk kebutuhan pengembangan perangkat lunak Anda."
    },
  ];


  return (
    <Flex direction={"column"} mb={"3em"} align={"center"} justify={"center"}>
      <Text fontSize={"larger"} fontWeight={"bold"}>
        FAQ (Frequently Asked Questions)
      </Text>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          {data.map((d) => {
            return <>
              <AccordionItem id={d.id}>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md" align={'left'}>{d.title}</Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600" align={'left'}>
                    {d.description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </>
          })}
        </Accordion>
      </Container>
    </Flex>
  );
}
