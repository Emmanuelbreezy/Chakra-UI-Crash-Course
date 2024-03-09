import { useState } from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Box,
  Text,
  HStack,
  Icon,
  Tag,
  Progress,
  Heading,
  Button,
  Avatar,
  AvatarGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiMessageCircle, FiLink, FiPlus } from "react-icons/fi";
//import img1 from "../assets/images/img1.jpg";
import { taskData } from "../../data/dumpy";

const Dashboard = () => {
  const [content, setContent] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full">
      <Box py="15px" flexDir="column" gap="5px">
        <Heading fontSize="28px" fontWeight="500" mb="5px">
          Tasya Wonder Project v3.0
        </Heading>
        <Text fontSize="15px">Created by Emma on March 04 2024</Text>
        <Button
          as={Link}
          to="/new-task"
          colorScheme="green"
          leftIcon={<FiPlus />}
          mt="18px"
        >
          New Task
        </Button>
      </Box>

      {/* {Simple Grid} */}

      <SimpleGrid py="20px" columns={4} minChildWidth="250px" spacing={5}>
        {taskData &&
          taskData?.map((task) => (
            <Card key={task.id} bg="white" cursor="pointer" onClick={() => {
              setContent(task.content)
              onOpen()
            }}>
              <CardHeader fontWeight="500" pb="0" flex="1">
                {task.content}
              </CardHeader>

              {/* {card body} */}
              <CardBody py="18px">
                <Tag colorScheme="green" fontWeight="400" fontSize="13px">
                  {task.tag.name}
                </Tag>
                <HStack pt="17px" w="full" gap="10px">
                  <AvatarGroup size="sm" max={2}>
                    {task.assignUsers.map((item, index) => (
                      <Avatar
                        key={index}
                        name={item.name}
                        src={item.avatarImage}
                        loading="lazy"
                        showBorder={true}
                      />
                    ))}
                  </AvatarGroup>
                  <Box flex="1">
                    <Text
                      fontSize="13px"
                      textAlign="right"
                      mt="-13px"
                      mb="3px"
                      color="gray.500"
                    >
                      {task.progressPercent}%
                    </Text>
                    <Progress
                      size="xs"
                      rounded="full"
                      colorScheme="green"
                      value={task.progressPercent}
                    />
                  </Box>
                </HStack>
              </CardBody>

              {/* {card footer} */}
              <CardFooter
                justifyContent="space-between"
                py="13px"
                color="gray.700"
                fontSize="14px"
                borderTop="1px solid #eee"
              >
                <HStack gap={1}>
                  <Icon as={FiMessageCircle} />
                  <Text>{task.totalComment} Comments</Text>
                </HStack>
                <HStack gap={1}>
                  <Icon as={FiLink} />
                  <Text>{task.noOfAttachement} Files</Text>
                </HStack>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{content}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            est eaque! Vel error nisi laboriosam illum alias itaque possimus
            consectetur tenetur. Minima libero est possimus quidem unde
            molestiae praesentium iure!
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Dashboard;
