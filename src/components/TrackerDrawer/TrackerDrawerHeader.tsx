import { DrawerHeader, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { isNil } from 'remeda';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import {
  selectCurrentSprint,
  selectCurrentSprintName,
  selectSprintNames,
} from '../../redux/timeTrackerConfigsReducer';

export const TrackerDrawerHeader = () => {
  const dispatch = useDispatch();
  const currentSprintName = useAppSelector(selectCurrentSprintName);
  const allSprints = useAppSelector(selectSprintNames);
  return (
    <DrawerHeader>
      {isNil(currentSprintName) && (
      <Text>
        Current Sprint:
        {currentSprintName}
      </Text>
      )}
      <Select
        placeholder="Select sprint"
        defaultValue={currentSprintName}
        onChange={(e) => dispatch(selectCurrentSprint(e.target.value))}
      >
        {allSprints.map((sprintName) => (
          <option key={`select-sprint-${sprintName}`} value={sprintName}>
            {sprintName}
          </option>
        )) }
      </Select>
    </DrawerHeader>
  );
};
