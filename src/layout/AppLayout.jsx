import { Grid, Box, useDisclosure, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function AppLayout() {
  const {isOpen, onToggle, onClose} = useDisclosure()
  return (
    <Grid templateColumns="repeat(6, 1fr)" h="100vh"  overflow="hidden">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="brand.400"
        minH="100vh"
        p="10px 20px"
        w={{base:"250px",lg:"auto"}}
        position={{ base: 'absolute', lg: 'static' }}
        right="0"
        bottom="0"
        left={{ base: isOpen ? '0' : '-100%', lg: 'auto' }}
        zIndex="99"
        transition="all 0.5s ease-in-out"

      >
        <SideBar onClose={onClose} />
      </GridItem>
      <GridItem as="main"  overflowX="hidden" overflowY="auto" colSpan={{ base: 6, lg: 4, xl: 5 }} bg="#f2f2f2">
        <NavBar onToggle={onToggle} />
        <Box p={{base:"10px 20px", lg:"10px 45px"}} h="auto">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}
