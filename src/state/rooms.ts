import { atom } from "recoil";
import { ROOMS } from "shared/constants/rooms";
import { Room } from "types/room";

type RoomsState = Room[];

export const roomsState = atom<RoomsState>({
  key: "roomsState",
  default: ROOMS,
});
