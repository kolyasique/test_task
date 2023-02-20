/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, {
    useState, useEffect, useMemo,
  } from 'react';
  
  export const ParseContext = React.createContext();
  
  export default function ParseContextProvider({ children }) {

    const [scriptArr, setScriptArr] = useState([])
    const [styleArr, setStyleArr] = useState([])

    const [loader, setLoader] = useState(null);
   

    const value = useMemo(() => ({
        scriptArr, setScriptArr, styleArr, setStyleArr, loader, setLoader
      }));

    return (
      <ParseContext.Provider value={value}>
        {children}
      </ParseContext.Provider>
    );
  }
  