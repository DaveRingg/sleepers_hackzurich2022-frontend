import { Achievement } from "./achievement";

export type User = {
  id: string;
  name: string;
  username: string;
  address: string;
  overallenergyhistory: number[];
  moneysaved: number;
  co2saved: number;
  achievements: Achievement[];
};
