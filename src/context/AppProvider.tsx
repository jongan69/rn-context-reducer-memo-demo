import React, { createContext, useReducer, ReactElement } from 'react'

interface AppContextInterface {
    name: string;
    author: string;
    url: string;
  }

export const AppContext = createContext({});

const intiialAuth = {
    userLoggedIn: false
}




const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            console.log("LOGIN: ", state)
            if(state.userLoggedIn){
                return { userLoggedIn: false}
            } else {
                return { userLoggedIn: true}
            }
        case "SIGNUP":
            return { userLoggedIn: false}
        default:
            return state;
    }
};

export const AppProvider = (props: { children: ReactElement }) => {
    const [auth, dispatch] = useReducer(reducer, intiialAuth)
    return (
    <AppContext.Provider value={{ auth, dispatch}}>
        {props.children}
    </AppContext.Provider>
    )
};

export default AppProvider;

