import React, { createContext,useState,useEffect } from 'react';
import INITIAL_STATE from "./directory.utils";

export const DirectoryContext = createContext({
    directory : {},
    getSections : () => {}
   
});


const DirectoryProvider = ({children}) => {

   const [directory, setdirectory] = useState(INITIAL_STATE);
   const getSections = () => directory.sections;
   
    
    return (<DirectoryContext.Provider
        value={{
            directory,
            getSections
        }    
        }
    >
    {children}</DirectoryContext.Provider>);
}

export default DirectoryProvider;