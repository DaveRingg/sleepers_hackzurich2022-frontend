import { useRecoilState } from "recoil";
import { userState } from "state/user";

export function useUser() {
  const [state, setState] = useRecoilState(userState);

  return {
    ...state,
  };
}
