import {
  Box,
  FormLabel,
  FormHelperText,
  Input,
  FormControl,
  Heading,
  Textarea,
  Checkbox,
  Select,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

const NewTask = () => {
  return (
    <Box py="10px" maxW="400px">
      <Heading mb="25px" fontSize="27px" fontWeight="500">
        New Task
      </Heading>
      <Form method="get" action="/new-task">
        <FormControl mb="30px" isRequired>
          <FormLabel>Task name</FormLabel>
          <Input
            type="text"
            name="taskName"
            bg="white"
            colorScheme="brand"
            placeholder="Enter task name"
          />
          <FormHelperText>Provide a descriptive task name</FormHelperText>
        </FormControl>

        <FormControl mb="30px">
          <FormLabel>Task description</FormLabel>
          <Textarea
            bg="white"
            name="description"
            minH="200px"
            placeholder="Enter description"
          ></Textarea>
          <FormHelperText></FormHelperText>
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="30px">
          <Checkbox
            name="isPriority"
            colorScheme="brand"
            size="lg"
            bg="white"
          />
          <FormLabel mb="0" ml="10px">
            Make a priority task
          </FormLabel>
        </FormControl>

        <FormControl mb="30px">
          <FormLabel>Project</FormLabel>
          <Select placeholder="Select Project" bg="white">
            <option>Tasya project</option>
            <option>Board 2</option>
          </Select>
          <FormHelperText></FormHelperText>
        </FormControl>

        <Button type="submit" colorScheme="brand">
          Submit
        </Button>
      </Form>
    </Box>
  );
};

export default NewTask;
