import React, { useState, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [tweets, setTweets] = useState([]);
    const [user, setUser] = useState([])

    const addTweets = (res) => {        
        setTweets([...res]);
    }

    const addUser = (res) => {        
        setUser(res);
    }

    return (
        <DataContext.Provider value={{
            tweets, addTweets,
            user, addUser,
        }}>
            {children}
        </DataContext.Provider>
    )
}
export { DataContext, DataProvider}