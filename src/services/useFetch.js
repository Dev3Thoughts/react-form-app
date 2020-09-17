import { useState, useEffect, useRef } from "react";
import { URL } from "./util/utility";

export default function useFetch(url) {
  const isMounted = useRef(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    async function init() {
      try {
        const res = await fetch(URL.API_URL);
        if (res.ok) {
          const json = await res.json();
          if (isMounted.current) setData(json.results);
        } else {
          throw res;
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    init();

    return () => {
      isMounted.current = false;
    };
  }, [url]);
  return { data, error, loading };
}
