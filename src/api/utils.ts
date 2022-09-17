import { AxiosRequestConfig } from "axios";

export function withAuthorization(
  token: string | undefined,
  config?: AxiosRequestConfig,
): AxiosRequestConfig {
  if (!token) return config ?? {};

  return {
    ...(config ?? {}),
    headers: {
      ...(config?.headers ?? {}),
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
}
