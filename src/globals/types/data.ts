// The only difference is what linter displays over type in components and Redux
export type SprintName = string;
export type TicketName = string;

export interface TicketType {
  estimation?: number,
  started?: number,
  'time tracked'?: number,
  finished?: boolean
}
export interface SprintType {
  [key: TicketName]: TicketType
}

export interface TimeConfigType {
  [key: SprintName]: SprintType
}
