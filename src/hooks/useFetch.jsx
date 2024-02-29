import { useState } from "react";

const useFetch = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    const fetchData = async (route) => {
        setLoading(true);
        await fetch(route)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false)
            })
    }

    return {
        error,
        fetchData,
        loading,
        data
    }
}

export default useFetch;