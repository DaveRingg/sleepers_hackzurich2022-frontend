import { ERoomStatus, Room } from "types/room";

export const ROOMS: Room[] = [
  {
    id: "kitchen",
    image: "../../assets/images/kitchen.png",
    name: "Kitchen",
    schedules: [
      {
        id: "a",
        start: 0.1,
        stop: 0.3,
      },
      {
        id: "b",
        start: 0.4,
        stop: 0.5,
      },
      {
        id: "b",
        start: 0.6,
        stop: 0.8,
      },
    ],
    status: ERoomStatus.ON,
  },
  {
    id: "living",
    image: "../../assets/images/room.png",
    name: "Living Room",
    schedules: [
      {
        id: "a",
        start: 0.1,
        stop: 0.3,
      },
      {
        id: "b",
        start: 0.4,
        stop: 0.5,
      },
      {
        id: "b",
        start: 0.6,
        stop: 0.8,
      },
    ],
    status: ERoomStatus.IDLE,
  },
  {
    id: "office",
    image: "../../assets/images/workspace.png",
    name: "Office",
    schedules: [],
    status: ERoomStatus.IDLE,
  },
];
