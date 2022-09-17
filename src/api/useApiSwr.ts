/* eslint-disable @typescript-eslint/no-shadow */
import useSWR from "swr";
import { useEffect, useState } from "react";
import { BareFetcher, PublicConfiguration } from "swr/dist/types";
import api from "./axios";
import { withAuthorization } from "./utils";
import { useUser } from "./useUser";

const fetcher = (url: string, token: string | undefined) =>
  url
    ? api.get(url, withAuthorization(token)).then((x) => x.data)
    : new Promise((resolve, reject) => {
        reject(new Error("No endpoint"));
      });

export function useApiSWR<T>(
  path: string | undefined,
  options?: Partial<PublicConfiguration<T, any, BareFetcher<T>>>,
) {
  const { token } = useUser();

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(false);
  }, [path, token]);

  const { data, error, isValidating, mutate } = useSWR<T>(
    path ? [path, token] : null,
    fetcher as any,
    {
      ...options,
      onSuccess(data: any, key: any, config: any) {
        options?.onSuccess?.(data, key, config);
        setInitialized(true);
      },
      onError(data: any, key: any, config: any) {
        options?.onError?.(data, key, config);
        setInitialized(true);
      },
    } as any,
  );

  const loading = isValidating && data === undefined;

  return {
    data,
    error,
    loading,
    initialized,
    mutate,
  };
}
