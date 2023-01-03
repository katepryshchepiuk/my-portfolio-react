import { Heading, HStack, Image, Text, VStack, Box, CardBody, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box color="black" bg="white" borderRadius='lg'>
      <Image borderRadius='lg' src={imageSrc}  />
      <Box p="4">
        <VStack align="left" spacing={4}>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <HStack spacing={2}>
            <Link as="b" href="#">See more</Link>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Card;
