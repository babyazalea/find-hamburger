import { useState, useCallback } from "react";

import axios from "axios";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initializeError = () => {
    setError(null);
    setIsLoading(false);
  };

  const sendPostRequest = async (url, sendingData) => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, sendingData);
      const responseData = await response.data;

      setIsLoading(false);

      return responseData;
    } catch (err) {
      if (err.response) {
        const errorResponse = err.response.data;
        setError(errorResponse.error.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
      }
      setIsLoading(false);
    }
  };

  const sendGetRequest = useCallback(async (url, sendingData) => {
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      const responseData = await response.data;

      setIsLoading(false);

      return responseData;
    } catch (err) {
      if (err.response) {
        const errorResponse = err.response.data;
        setError(errorResponse);
      } else {
        setError("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
      }
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, initializeError, sendPostRequest, sendGetRequest };
};
