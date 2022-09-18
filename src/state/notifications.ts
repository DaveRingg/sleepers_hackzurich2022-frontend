import { atom } from "recoil";
import { Room } from "types/room";

type Notification =
  | {
      type: "blackout";
      amountGathered: number;
    }
  | {
      type: "highconsumption";
      room: Room;
    };

export const notificationState = atom<Notification[]>({
  key: "notificationState",
  default: [],
});
