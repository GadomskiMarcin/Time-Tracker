import React from 'react';
import { Flex } from '@chakra-ui/react';
import { FCChildren } from '../globals/types/components';

export const DefaultLayout: FCChildren = ({ children }) => (
  <Flex
    minH="100vh"
    minW="100vw"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Flex>
);
