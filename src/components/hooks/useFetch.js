import { useRef, useEffect, useState } from "react"

export const useFetch = (url, _body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const body = useRef(_body);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const result = await response.json();
                setLoading(false);
                setData(result);
                setError("");
            } catch(error) {
                console.log(error.message);
                setLoading(false);
                setError(error.message);
            }
        }
        fetchData();
    }, [url, body]);

  return {
    data, loading, error
  }
}
