import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '1917aacdd6msh37f215961a3ad58p1a5223jsn32f0a748bf29',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        console.log(response.data)    
        setData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          await new Promise(resolve => setTimeout(resolve, 5000)); 
          fetchData(); 
        } else {
          setError(error);
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
