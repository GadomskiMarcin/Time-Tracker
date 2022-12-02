import React, { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { CompactTimeTracker } from './CompactTimeTracker';
import { ExpandedTimeTracker } from './ExpandedTimeTracker';

export const TimeTracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <CompactTimeTracker
        btnRef={btnRef}
        onOpen={onOpen}
      />
      <ExpandedTimeTracker
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      />
    </>
  );
};
