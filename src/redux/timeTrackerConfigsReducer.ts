import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isNil, omit } from 'remeda';
import { writeJsonFile } from 'write-json-file';
import type { RootState } from './store';
import {
  SprintName, TicketName, TicketType, TimeConfigType,
} from '../globals/types/data';
import jsonData from '../trackerConfigs/example.json';

interface TicketId {
  sprint: SprintName,
  ticketName: TicketName
}
interface TimeConfigState {
  data: TimeConfigType,
  selectedSprint?: SprintName,
  trackedTicket?: TicketId,
  currentTime?: number
}

const initialState: TimeConfigState = {
  data: {},
};

// Reason behind using Redux vs Context is performance (Lower number of fetches and saves)
export const timeTrackerConfigsReducer = createSlice({
  name: 'timeTrackerConfigs',
  initialState,
  reducers: {
    loadTrackerConfigs: (state) => {
      state.data = JSON.parse(JSON.stringify(jsonData));
    },
    selectCurrentSprint: (state, action: PayloadAction<string>) => {
      state.selectedSprint = action.payload;
    },
    addSprint: (state, action: PayloadAction<string>) => {
      state.data = {
        [action.payload]: {},
        ...state.data,
      };
    },
    addTask: (state, action: PayloadAction<TicketId & { task: TicketType }>) => {
      const {
        ticketName,
        sprint,
        task,
      } = action.payload;
      state.data = {
        ...state.data,
        [sprint]: {
          ...state.data[sprint],
          [ticketName]: task,
        },
      };
    },
    setTicketFinished: (state, action: PayloadAction<TicketId>) => {
      const {
        ticketName,
        sprint,
      } = action.payload;
      state.data[sprint][ticketName].finished = true;
    },
    trackTicket: (state, action: PayloadAction<TicketId & { initialTime: number }>) => {
      state.trackedTicket = omit(action.payload, ['initialTime']);
      state.currentTime = action.payload.initialTime;
    },
    modifyTrackedTime: (state, action: PayloadAction<TicketId & { time: number }>) => {
      const {
        ticketName,
        sprint,
        time,
      } = action.payload;
      state.currentTime = time;
      // TS had hard time to parse it otherwise
      state.data[sprint][ticketName] = {
        ...state.data[sprint][ticketName],
        'time tracked': time,
      };
    },
    // Later I am going to use json-server from nodeJs to store it properly
    // For now I am going to just store it locally
    // It looks painfully...
    saveTest: (state) => {
      writeJsonFile('../trackerConfigs/example.json', state.data).then(
        () => console.log('Saved'),
      )
        .catch((err) => console.error(err));
    },
  },
});

export const {
  addSprint,
  addTask,
  loadTrackerConfigs,
  selectCurrentSprint,
  setTicketFinished,
  trackTicket,
  modifyTrackedTime,
  saveTest,
} = timeTrackerConfigsReducer.actions;

export const selectSprintNames = ({ timeTrackerConfigs }: RootState) => Object.keys(timeTrackerConfigs.data);
export const selectCurrentSprintName = ({ timeTrackerConfigs }: RootState) => timeTrackerConfigs.selectedSprint;
export const selectTickets = ({ timeTrackerConfigs }: RootState) => (isNil(timeTrackerConfigs.selectedSprint)
  ? {}
  : timeTrackerConfigs.data[timeTrackerConfigs.selectedSprint]);
export const selectTrackedTicket = ({ timeTrackerConfigs }: RootState) => timeTrackerConfigs.trackedTicket;
export const selectCurrentTime = ({ timeTrackerConfigs }: RootState) => timeTrackerConfigs.currentTime;
