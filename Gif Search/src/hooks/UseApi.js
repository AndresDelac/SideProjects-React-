import { useEffect, useState } from "react";

const useApi = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchApi = () => {
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                setLoading(true);
                setData(responseJson.data);
                // console.log(responseJson);
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        fetchApi();
    },)

    return { data, loading }

}
 
export default useApi;