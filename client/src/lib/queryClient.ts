import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let errorMessage = res.statusText;
    try {
      const json = await res.json();
      errorMessage = json.message || errorMessage;
    } catch {
      const text = await res.text();
      errorMessage = text || errorMessage;
    }
    throw new ApiError(res.status, errorMessage);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  try {
    const res = await fetch(url, {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    await throwIfResNotOk(res);
    return res;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(0, "네트워크 요청 실패", error instanceof Error ? error : undefined);
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

// Optimistic Update helpers
export function optimisticUpdateItems<T>(
  key: unknown[],
  updater: (prev: T[]) => T[]
): T[] | undefined {
  const previous = queryClient.getQueryData<T[]>(key);
  if (previous) {
    queryClient.setQueryData(key, updater(previous));
  }
  return previous;
}

// Error handling helpers
export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public originalError?: Error
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 400) return "요청이 올바르지 않습니다";
    if (error.status === 401) return "인증이 필요합니다";
    if (error.status === 403) return "권한이 없습니다";
    if (error.status === 404) return "찾을 수 없습니다";
    if (error.status === 409) return "충돌이 발생했습니다. 다시 시도해주세요";
    if (error.status >= 500) return "서버 오류가 발생했습니다";
    return error.message;
  }
  if (error instanceof Error) {
    if (error.message.includes("fetch")) return "네트워크 연결을 확인해주세요";
    return error.message;
  }
  return "알 수 없는 오류가 발생했습니다";
}
