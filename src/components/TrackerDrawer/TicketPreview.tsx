import React, { FC } from 'react';
import {
  Button, Checkbox, Flex, Text,
} from '@chakra-ui/react';
import { isNil, map } from 'remeda';
import { useDispatch } from 'react-redux';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { SprintName, TicketName, TicketType } from '../../globals/types/data';
import { HookCallback } from '../../globals/types/functions';
import { setTicketFinished, trackTicket } from '../../redux/timeTrackerConfigsReducer';

interface TicketPreviewProps {
  sprintName: SprintName
  name: TicketName,
  ticket: TicketType,
  onClick: HookCallback
  isExpanded: boolean
}
export const TicketPreview: FC<TicketPreviewProps> = ({
  sprintName,
  name,
  ticket,
  onClick,
  isExpanded,
}) => {
  const dispatch = useDispatch();

  const isFinished = !isNil(ticket?.finished) && ticket.finished;
  const renderProperties = () => map(Object.keys(ticket), (property) => (
    <Text key={`ticket-${name}-prop-${property}`}>
      {property}
      :
      {ticket[property as keyof TicketType]?.toString()}
    </Text>
  ));

  return (
    <Flex direction="column" mb="12px">
      <Checkbox
        isIndeterminate={isExpanded}
        onChange={() => onClick()}
      >
        <Text fontSize={21} fontWeight="bold" userSelect="none">
          {name}
        </Text>
      </Checkbox>
      <Flex>
        <Button
          ml="12px"
          onClick={() => dispatch(setTicketFinished({
            sprint: sprintName,
            ticketName: name,
          }))}
          isDisabled={isFinished}
        >
          Finish
        </Button>
        <Button
          ml="4px"
          onClick={() => dispatch(trackTicket({
            sprint: sprintName,
            ticketName: name,
            initialTime: !isNil(ticket['time tracked']) ? parseInt(ticket['time tracked'], 10) : 0,
          }))}
        >
          Track
        </Button>
        {isFinished && <CheckCircleIcon mt="12px" ml="8px" color="green" />}
      </Flex>
      <Flex direction="column" ml="12px">
        {isExpanded && renderProperties()}
      </Flex>
    </Flex>
  );
};
