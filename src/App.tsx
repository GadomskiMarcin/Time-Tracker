import React, { useEffect } from 'react';
import { Description } from './containers/Description';
import { DefaultLayout } from './containers/DefaultLayout';
import { TimeTracker } from './components/TimeTracker/TimeTracker';
import { useAppDispatch } from './redux/hooks';
import { loadTrackerConfigs, saveTest } from './redux/timeTrackerConfigsReducer';
import { StopWatch } from './components/Stopwatch/Stopwatch';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTrackerConfigs());

    return () => {
      dispatch(saveTest());
    };
  }, []);

  return (
    <DefaultLayout>
      <TimeTracker />
      <StopWatch />
      <Description />
    </DefaultLayout>
  );
};

export default App;
