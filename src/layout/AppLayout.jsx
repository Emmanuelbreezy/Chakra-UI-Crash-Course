import { Grid, Box, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function AppLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan="1" bg="white" minH="100vh" p="10px 20px">
        <SideBar />
      </GridItem>
      <GridItem as="main" colSpan="5" bg="#f2f2f2">
        <NavBar />
        <Box p="10px 40px">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}
