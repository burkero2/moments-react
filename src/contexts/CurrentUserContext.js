import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);



export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();
export const CurrentUserProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      console.log(data);
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};


