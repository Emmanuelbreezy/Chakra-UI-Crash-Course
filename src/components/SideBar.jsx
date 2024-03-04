import {
  List,
  ListItem,
  ListIcon,
  Button,
  Divider,
  VStack,
  HStack,
  Heading,
  IconButton,
  //Icon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { createIcon } from "@chakra-ui/icons";
import {
  FiCalendar,
  FiFileText,
  FiLogOut,
  FiSettings,
  FiUser,
  FiX,
} from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const SideBar = ({ onClose }) => {
  // const HomeIcon = (props) => (
  //   <Icon viewBox="0 0 20 20" fill="none" {...props}>
  //     <g id="home 1">
  //       <path
  //         id="Vector"
  //         d="M2.5 7.50002L10 1.66669L17.5 7.50002V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.50002Z"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         id="Vector_2"
  //         d="M7.5 18.3333V10H12.5V18.3333"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </g>
  //   </Icon>
  // );

  const HomeIcon = createIcon({
    displayName: "HomeIcon",
    viewBox: "0 0 20 20",
    defaultProps: {
      fill: "none",
    },
    path: (
      <g id="home 1">
        <path
          id="Vector"
          d="M2.5 7.50002L10 1.66669L17.5 7.50002V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.50002Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M7.5 18.3333V10H12.5V18.3333"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
  });

  const itemStyle = {
    color: "#757575",
    a: {
      display: "flex",
      alignItems: "center",
      p: "10px 10px",
    },
  };

  return (
    <VStack w="full" align="flex-start" spacing={7}>
      <HStack w="full" justify="space-between">
        <Heading fontSize="30px">Tasa.</Heading>
        <IconButton
          aria-label=""
          display={{ base: "flex", lg: "none" }}
          icon={<FiX />}
          rounded="full"
          onClick={onClose}
        />
      </HStack>
      <List sx={itemStyle} w="full" spacing={3}>
        <ListItem>
          <NavLink to="/">
            <ListIcon as={HomeIcon} />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/new-task">
            <ListIcon as={FiCalendar} />
            Task
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/account">
            <ListIcon as={FiUser} />
            Account
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="#">
            <ListIcon as={FiFileText} />
            Project
          </NavLink>
        </ListItem>
        <Divider />
        <ListItem>
          <NavLink to="#">
            <ListIcon as={FiSettings} />
            Settings
          </NavLink>
        </ListItem>
        <ListItem>
          <Button
            w="full"
            colorScheme="green"
            justifyContent="flex-start"
            color="#fff"
            fontWeight="400"
          >
            <ListIcon as={FiLogOut} />
            Logout
          </Button>
        </ListItem>
      </List>
    </VStack>
  );
};

export default SideBar;
