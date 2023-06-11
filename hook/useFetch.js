import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (enpoint, query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${enpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '622e99e37dmsh2abb301c3d7c89fp13e4b4jsnb1eed13e1721',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetctData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }
        catch(error){
            setError(error);
            alert('There is an error');
        }
        finally{
            setIsLoading(false);
        }

    }

    useEffect(()=>{
        fetctData();
    },[]);

    const reFetch = () =>{
        setIsLoading(true);
        fetch();
    }

    return { data, isLoading, error, reFetch };
}

export default useFetch;