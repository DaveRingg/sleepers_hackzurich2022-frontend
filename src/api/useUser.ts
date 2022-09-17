import { useRecoilState } from "recoil";
import { userState } from "state/user";

export function useUser() {
  const [state] = useRecoilState(userState);

  return {
    ...state,
  };
}
