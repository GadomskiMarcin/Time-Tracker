import { TIME_DISPLAY_SUFFIX } from './consts';

export const timeStampToMinutes = (time : number) => (`0${Math.floor((time / 60000) % 60)}`).slice(-2) + TIME_DISPLAY_SUFFIX;
export const timeStampToSeconds = (time : number) => (`0${Math.floor((time / 1000) % 60)}`).slice(-2);
