import React, { createContext, useState } from 'react';
// import useRequest from '../hooks/useRequest';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [tweets, setTweets] = useState([])
    const [user, setUser] = useState({})

    const addTweets = (res) => {        
        setTweets([...res]);
    }
    const addUser= (res) => {        
        setUser(res);
    }

    return (
        <DataContext.Provider value={{
            tweets, addTweets,
            user, addUser
        }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };