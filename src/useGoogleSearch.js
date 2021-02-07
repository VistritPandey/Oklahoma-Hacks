import React from 'react'
import {useState, useEffect } from 'react'
import API_KEY from "./keys"

const CONTEXT_KEY = "920d8f4c9be4ad7d4";


const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect (() => {
        const fetchData = async()=> {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return { data }
    
};

export default useGoogleSearch
