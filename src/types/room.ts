export enum ERoomStatus {
  IDLE = "idle",
  ON = "on",
  SHUTOFF = "shutoff",
}

export type Room = {
  id: string;
  name: string;
  image: string;
  status: ERoomStatus;
  schedules: Schedule[];
};

export type Schedule = {
  id: string;
  start: number;
  stop: number;
};
