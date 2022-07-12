import { useEffect, useState } from "react";

type ParamsType = Record<string, string>;

export function useFetch<T = unknown>(url: string, params?: ParamsType) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    const fetchData = async () => {
      //criando a url com seus parâmetros são fixos pois será a única api utilizado no projeto
      const fullUrl = new URL(`https://gateway.marvel.com/v1/public${url}?`);
      fullUrl.search = new URLSearchParams({
        apikey: "6f157c697c92029fd8874ffb0a9dafa0",
        ...params,
      }).toString();

      const response = await fetch(fullUrl.href);
      const data = await response.json();

      setData(data);
      setLoading(false);

      console.log("Requisição");
    };

    fetchData();
  }, [url, params]);
  return { data, loading };
}
