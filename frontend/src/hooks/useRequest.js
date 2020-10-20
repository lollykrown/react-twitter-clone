import React, { useEffect } from 'react';
import axios from 'axios';

const useRequest = (baseUrl, routeName) => {
  
    const signal = React.useRef(axios.CancelToken.source());
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await  axios.get(`${baseUrl}/${routeName}`, {
            cancelToken: signal.current.token,
          });
          //setData(response.data)

        } catch (e) {
          console.log('Loading data error', e);
          if (axios.isCancel(e)) {
            console.log('Get request canceled');
          } else {
            console.log(e)
        }
        }
      };
      fetchData();
      return () => {
        console.log('unmount and cancel running axios request');
        signal.current.cancel();
      };
    }, [baseUrl, routeName]);
  
  };
  
  export default useRequest;