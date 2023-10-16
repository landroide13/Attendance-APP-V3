import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) =>{

    const [user, setUser] = useState({});
    const [token, _setToken] = useState('1234');

    //localStorage.getItem('ACCESS_TOKEN')

    const setToken = token => {
        _setToken(token)

        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
  
    return(
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken 
        }}>
            { children }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)












