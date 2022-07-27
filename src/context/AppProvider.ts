import React, { createContext, useReducer } from 'react'

export const AppContext = createContext({});

const intiialAuth = {
    userLoggedIn: false
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            return;
        case "SIGNUP":
            return;
        default:
            return state;
    }
};

const [auth, dispatch] = useReducer(reducer, intiialAuth)



export const AppProvider = (props: { children: ReactElement }) => {
    return (
        <AppContext.Provider value= {{ auth, dispatch }}>
    { props.children }
    < /AppContext.Provider>
    )
}

export default AppProvider;

