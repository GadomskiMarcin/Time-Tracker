import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

export const Description = () => (
  <Flex maxW="400px">
    <Text
      fontSize={15}
      color="black"
    >
      {'Project created for fun. It is meant to be developed in my free time, which I lack.\n\n'
        + 'I wanted to create the library to track how much time I spend looking at the website during development.'}
    </Text>
  </Flex>
);
