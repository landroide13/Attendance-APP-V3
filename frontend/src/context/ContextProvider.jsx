import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {}
})

export const ContextProvider = ({children}) =>{

    const [user, setUser] = useState({});
    const [token, _setToken] = useState('1234');
    const [notification, _setNotification] = useState('');

    //localStorage.getItem('ACCESS_TOKEN')

    const setToken = token => {
        _setToken(token)

        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    const setNotification = message => {
        _setNotification(message);
    
        setTimeout(() => {
          _setNotification('')
        }, 5000)
      }
  
    return(
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            setNotification,
            notification  
        }}>
            { children }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)












