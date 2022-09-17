import { useCallback, useState } from "react";

export function useRefresh() {
  const [state, setState] = useState(0);

  const refresh = useCallback(() => {
    setState((x) => x + 1);
  }, []);

  return { refresh, counter: state };
}
