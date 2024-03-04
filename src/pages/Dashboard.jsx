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
} from "@chakra-ui/react";
import { FiMessageCircle, FiLink, FiPlus } from "react-icons/fi";
import { taskData } from "../../data/dumpy";

const Dashboard = () => {
  return (
    <Box w="full">
      <Box py="18px" flexDir="column" gap="5px">
        <Heading fontSize="28px" fontWeight="500" mb="5px">
          Tasya Wonder Project v3.0
        </Heading>
        <Text fontSize="15px">Created by Emma on March 04 2024</Text>
        <Button colorScheme="green" leftIcon={<FiPlus />} mt="18px">
          New Task
        </Button>
      </Box>

      {/* {Simple Grid} */}
      
      <SimpleGrid py="10px" columns={4} minChildWidth="250px" spacing={5}>
        {taskData &&
          taskData?.map((task) => (
            <Card key={task.id} bg="white">
              <CardHeader fontWeight="500" pb="0" flex="1">
                {task.content}
              </CardHeader>

              {/* {card body} */}
              <CardBody py="18px">
                <Tag colorScheme="green" fontWeight="400" fontSize="13px">
                  {task.tag.name}
                </Tag>
                <HStack pt="17px" w="full" gap="10px">
                  <Box>AV</Box>
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
    </Box>
  );
};

export default Dashboard;
