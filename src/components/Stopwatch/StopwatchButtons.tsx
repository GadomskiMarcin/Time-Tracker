import React, { FC } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { HookCallback } from '../../globals/types/functions';

interface StopwatchButtonsProps {
  isPaused: boolean,
  onClick: HookCallback,
}
export const StopwatchButtons: FC<StopwatchButtonsProps> = ({
  isPaused,
  onClick,
}) => (
  <Button onClick={onClick}>
    <Text>{isPaused ? 'Start' : 'Pause'}</Text>
  </Button
  >
);
