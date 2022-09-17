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
    status: ERoomStatus.IDLE,
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
  },
  {
    id: "office",
    image: "../../assets/images/workspace.png",
    name: "Office",
    status: ERoomStatus.IDLE,
    schedules: [],
  },
  {
    id: "bathroom",
    image: "../../assets/images/workspace.png",
    name: "Bathroom",
    status: ERoomStatus.ON,
    schedules: [],
  },
];
