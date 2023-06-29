import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  StackDivider,
  Button,
  Heading,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Impact = ({ children, title, work }) => {
  return (
    <Card>
      <CardHeader>
        <Heading as="h4" size="md">
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing={4}>
          {children}
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          size="sm"
          as={NavLink}
          to={`works/${work}`}
          colorScheme="blue"
          scroll={"false"}
        >
          Voir plus
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Impact;
