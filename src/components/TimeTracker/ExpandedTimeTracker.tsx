import React, { FC, LegacyRef, RefObject } from 'react';
import {
  Drawer,
  DrawerOverlay,
} from '@chakra-ui/react';
import { TrackerDrawer } from '../TrackerDrawer/TrackerDrawer';
import { HookCallback } from '../../globals/types/functions';

interface ExpandedTimeTrackerProps {
  isOpen: boolean,
  onClose: HookCallback,
  btnRef: LegacyRef<HTMLButtonElement>
}
export const ExpandedTimeTracker: FC<ExpandedTimeTrackerProps> = ({ isOpen, onClose, btnRef }) => (
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <TrackerDrawer onClose={onClose} />
  </Drawer>
);
