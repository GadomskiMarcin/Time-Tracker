import { DrawerBody, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  filter,
  isNil, map, mapValues, pipe,
} from 'remeda';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentSprintName, selectTickets } from '../../redux/timeTrackerConfigsReducer';
import { TicketPreview } from './TicketPreview';
import { TicketName } from '../../globals/types/data';

export const TrackerDrawerBody = () => {
  const currentSprintName = useAppSelector(selectCurrentSprintName);
  const tickets = useAppSelector(selectTickets);
  const [expandedTickets, selectExpandedTickets] = useState<TicketName[]>([]);
  const expandTicket = (ticketName : TicketName) => selectExpandedTickets(
    [...expandedTickets, ticketName],
  );
  const collapseTicket = (ticketName : TicketName) => selectExpandedTickets(
    filter(
      expandedTickets,
      (expandedTicketName) => expandedTicketName !== ticketName,
    ),
  );

  if (isNil(currentSprintName)) {
    return null;
  }
  const renderTickets = () => map(
    Object.keys(tickets),
    (ticketName) => {
      const isExpanded = expandedTickets.includes(ticketName);
      return (
        <TicketPreview
          sprintName={currentSprintName}
          key={`ticket-${ticketName}`}
          ticket={tickets[ticketName]}
          name={ticketName}
          onClick={isExpanded
            ? () => collapseTicket(ticketName)
            : () => expandTicket(ticketName)}
          isExpanded={isExpanded}
        />
      );
    },
  );

  return (
    <DrawerBody>
      {(isNil(tickets) || Object.keys(tickets).length === 0)
        ? <Text>No tickets created</Text>
        : renderTickets()}
    </DrawerBody>
  );
};
