import { Grid, Box, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan="1" bg="white" minH="100vh" p="20px">
        <Box>Sidebar</Box>
      </GridItem>
      <GridItem as="main" colSpan="5" bg="#f5f5f5">
        <NavBar />
        <Box p="10px 40px">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}
