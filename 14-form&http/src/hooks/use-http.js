import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, onSuccess) => {
    try {
      setIsLoading(true);

      const response = await fetch(config.url, {
        headers: config.headers ? config.headers : {},
        method: config.method ? config.method : "GET",
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something Wrong");
      }

      const data = await response.json();

      onSuccess(data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
