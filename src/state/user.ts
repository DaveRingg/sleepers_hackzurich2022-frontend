import { atom } from "recoil";
import { User } from "types/user";

type UserState =
  | {
      token: undefined;
      user: undefined;
    }
  | {
      token: string;
      user: User;
    };

const FAKE_STATE: UserState = {
  token: "faketoken",
  user: {
    id: "use",
    achievements: [],
    address: "Bombachhalde 28, 8049 Zürich",
    co2saved: 3,
    moneysaved: 138,
    name: "Mugeeb",
    overallenergyhistory: [0, 2, 3, 1, 4, 5, 9, 8, 8, 9, 6, 2, 4, 5],
    username: "gumbee",
  },
};

export const userState = atom<UserState>({
  key: "userState",
  default: FAKE_STATE,
});
