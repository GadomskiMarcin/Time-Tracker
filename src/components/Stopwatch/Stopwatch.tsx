import React, { useEffect, useState } from 'react';
import { isNil } from 'remeda';
import { Card, CardBody } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { StopwatchButtons } from './StopwatchButtons';
import { DisplayTimeBox } from './DisplayTimeBox';
import {
  modifyTrackedTime,
  selectCurrentTime,
  selectTrackedTicket,
} from '../../redux/timeTrackerConfigsReducer';
import { useAppSelector } from '../../redux/hooks';

export const StopWatch = () => {
  const [isPaused, setIsPaused] = useState(true);
  const initialTime = useAppSelector(selectCurrentTime);
  const trackedTicket = useAppSelector(selectTrackedTicket);
  const [time, setTime] = useState(initialTime);

  const dispatch = useDispatch();
  useEffect(() => {
    setTime(initialTime);
  }, [initialTime, trackedTicket]);

  useEffect(() => {
    let intervalId: number | null = null;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setTime((prevTime) => (prevTime ?? 0) + 100);
      }, 100);
    } else if (!isNil(intervalId)) {
      clearInterval(intervalId);
    }

    return () => {
      if (!isNil(intervalId)) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused]);

  if (isNil(time)) {
    return null;
  }

  return (
    <Card
      position="absolute"
      left={0}
      top="80px"
      display="inline-block"
    >
      <CardBody>
        <DisplayTimeBox time={time} />
        <StopwatchButtons
          isPaused={isPaused}
          onClick={() => {
            setIsPaused(!isPaused);
            dispatch(modifyTrackedTime({
              sprint: trackedTicket?.sprint ?? '',
              ticketName: trackedTicket?.ticketName ?? '',
              time,
            }));
          }}
        />
      </CardBody>
    </Card>
  );
};
