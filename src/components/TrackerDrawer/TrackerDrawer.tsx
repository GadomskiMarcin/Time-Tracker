import {
  Button,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { HookCallback } from '../../globals/types/functions';
import { TrackerDrawerHeader } from './TrackerDrawerHeader';
import { TrackerDrawerBody } from './TrackerDrawerBody';
import { useAppDispatch } from '../../redux/hooks';
import { saveTest } from '../../redux/timeTrackerConfigsReducer';

export const TrackerDrawer: FC<{ onClose: HookCallback }> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  return (
    <DrawerContent>
      <DrawerCloseButton />
      <TrackerDrawerHeader />
      <TrackerDrawerBody />

      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="blue" onClick={() => dispatch(saveTest())}>Save</Button>
      </DrawerFooter>
    </DrawerContent>
  );
};
