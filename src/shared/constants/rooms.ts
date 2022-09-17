import { ERoomStatus, Room } from "types/room";

export const ROOMS: Room[] = [
  {
    id: "livingroom",
    image: require("../../assets/images/room.png"),
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
    status: ERoomStatus.ON,
  },
  {
    id: "bedroom",
    image: require("../../assets/images/bedroom.png"),
    status: ERoomStatus.IDLE,
    name: "Bedroom",
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
    id: "kitchen",
    image: require("../../assets/images/kitchen.png"),
    name: "Kitchen",
    schedules: [],
    status: ERoomStatus.IDLE,
  },
  {
    id: "office",
    image: require("../../assets/images/workspace.png"),
    name: "Office",
    status: ERoomStatus.IDLE,
    schedules: [],
  },
  {
    id: "bathroom",
    image: require("../../assets/images/bath.png"),
    name: "Bathroom",
    schedules: [],
    status: ERoomStatus.IDLE,
  },
];
