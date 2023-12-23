
import { createContext } from "react";

const  AppContext = createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{myName : "satish prajapati"}}>{children}</AppContext.Provider>;
};

export {AppProvider,AppContext};