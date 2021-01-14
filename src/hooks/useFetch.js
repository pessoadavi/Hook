import React, { useState, useEffect } from 'react';
export const useFetch = (url, method = 'get') => {

    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {

        fetch(url, { method })
            .then(resp => resp.json())      // converteu pra json
            .then(json => setResponse({     // json pronto ele muda estado do obj
                data: json,
                loading: false
            }))

    }, [url, method])

    return response
}