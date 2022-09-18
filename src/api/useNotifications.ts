import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { notificationState } from "state/notifications";
import { useRooms } from "./useRooms";

export function useNotifications() {
  const [state, setState] = useRecoilState(notificationState);
  const { rooms } = useRooms();

  const addBlackoutNotification = useCallback(() => {
    setState((x) => {
      if (x.find((y) => y.type === "blackout")) return x;

      return [...x, { type: "blackout", amountGathered: 0 }];
    });
  }, [setState]);

  const addInsightNotification = useCallback(() => {
    setState((x) => {
      if (x.find((y) => y.type === "highconsumption")) return x;

      return [...x, { type: "highconsumption", room: rooms[2] }];
    });
  }, [setState, rooms]);

  const removeInsightNotification = useCallback(() => {
    setState((x) => x.filter((y) => y.type !== "highconsumption"));
  }, [setState]);

  const removeBlackoutNotification = useCallback(() => {
    setState((x) => x.filter((y) => y.type !== "blackout"));
  }, [setState]);

  return {
    notifications: state,
    addBlackoutNotification,
    addInsightNotification,
    removeBlackoutNotification,
    removeInsightNotification,
    mutate: setState,
  };
}
