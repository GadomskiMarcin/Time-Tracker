import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { timeStampToMinutes, timeStampToSeconds } from './utils';

export const DisplayTimeBox: FC<{ time: number }> = ({ time }) => (
  <Flex ml="12px">
    <Text fontWeight="bold" fontSize={22}>
      {timeStampToMinutes(time)}
    </Text>
    <Text fontWeight="bold" fontSize={22}>
      {timeStampToSeconds(time)}
    </Text>
  </Flex>
);
