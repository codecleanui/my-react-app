import { useState, useCallback } from "react";

interface AsyncRequestHook {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: any;
  data: any;
  execute: (...args: any[]) => Promise<void>;
}

const useAsyncRequest = (): AsyncRequestHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(
    async (method: string, url: string, body?: any): Promise<void> => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          credentials:"include",
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const cookies = response.headers.get('x-auth-bearer');
        console.log(cookies);
        console.log(response.headers.getSetCookie())
        setError(null);
        if (!response.ok) {
          throw new Error("Request failed");
        }

        const result = await response.json();
        setIsSuccess(true);
        setData(result);
      } catch (error: any) {
        setIsError(true);
        setError(error.message);
        console.error("Error during request:", error.message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    execute,
  };
};

export default useAsyncRequest;
