import { useRecoilState } from "recoil";
import { roomsState } from "state/rooms";

export function useRooms() {
  const [state, setState] = useRecoilState(roomsState);

  return {
    rooms: state,
    mutate: setState,
  };
}
