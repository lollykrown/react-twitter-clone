import React, { useReducer, useEffect } from 'react';
import requestReducer, { REQUEST_STATUS } from '../reducers/request';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

import {
  GET_TWEETS_SUCCESS,
  GET_FAILURE,
  CHECK_AUTH,
  PUT_FAILURE,
  PUT_SUCCESS,
  PUT
} from '../actions/request';

const useRequest = (baseUrl, routeName) => {
  const [{ tweets, status, error }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    tweets: [],
    error: null,
  });

  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${routeName}`, {
          withCredentials:true,
          cancelToken: signal.current.token,
        });
        dispatch({  
          type: GET_TWEETS_SUCCESS,
          tweets: response.data,
        });
      } catch (e) {
        console.log('Loading data error', e);
        if (axios.isCancel(e)) {
          console.log('Get request canceled');
        } else {
          dispatch({
            type: GET_FAILURE,
            error: e,
          });
      }
      }
    };
    fetchData();
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel();
    };
  }, [baseUrl, routeName]);

  const propsLocal = {
    tweets,
    status,
    error,
    put: React.useCallback(async (record) => {
      try {
        dispatch({
          type: PUT,
          record,
        });
        await axios.put(`${baseUrl}/${routeName}/${record.id}`, record);
        dispatch({
          type: PUT_SUCCESS,
          record: record,
        });
      } catch (e) {
        dispatch({
          type: PUT_FAILURE,
          error: e,
        });
      }
    },[]),
  };
  return propsLocal;
};

const useAuth = () => {
  const history = useHistory();

  const [{ auth, status }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    auth: true
  });
  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const checkAuthStatus = async () => {    
      try {
        const res = await axios.get('/Lollykrown',  {
          withCredentials:true,
          cancelToken: signal.current.token,
        })
        console.log('checking', res)

        if(res.data.status){
          // dispatch({  
          //   type: CHECK_AUTH,
          //   auth: true,
          // });
          console.log('useAuth',res.data.data)
          // setUser(res.data.data)
        }

          if(!res.data.status){
            // dispatch({  
            //   type: CHECK_AUTH,
            //   auth: false,
            // });
            localStorage.removeItem("user");
            toast.error('Your session expired, refresh to reedirect to login page')
            history.replace('/')
          }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          throw error
        }
      }
    };
    
    checkAuthStatus()
    return () => {
      signal.current.cancel('Operation canceled by the user.');
      console.log('unmount and cancel running axios request');
    };
  }, [])

  const propsLocal = {
    auth,
    status,
  };
  return propsLocal;
};

export { useRequest, useAuth };
