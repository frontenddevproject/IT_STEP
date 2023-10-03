import { useEffect, useState } from "react";

export const useFetchData = <TData>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((responseData) => {
         setData(responseData);
      })
      .catch((e) => {
        setIsLoading(false);
        setData(null);
        console.log(e);
      });
  }, [url, options]);

  return { data, isLoading }
};
