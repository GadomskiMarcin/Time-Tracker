import { Box, Button } from '@chakra-ui/react';
import React, { FC, LegacyRef } from 'react';
import { HookCallback } from '../../globals/types/functions';

interface CompactTimeTrackerProps {
  btnRef: LegacyRef<HTMLButtonElement>;
  onOpen: HookCallback;
}
export const CompactTimeTracker: FC<CompactTimeTrackerProps> = ({
  btnRef,
  onOpen,
}) => (
  <Box
    position="absolute"
    left={0}
    top="10px"
    display="inline-block"
  >
    <Button
      ref={btnRef}
      w="64px"
      minW="64px"
      minH="40px"
      h="40px"
      borderRadius="10% 15% 15% 10%;"
      onClick={onOpen}
    >
      Tracker
    </Button>
  </Box>
);
