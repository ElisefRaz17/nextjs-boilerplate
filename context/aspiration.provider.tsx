"use client";

import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AspirationContextType{
    aspiration:string;
    setAspiration: React.Dispatch<React.SetStateAction<string>>;
}

const aspirationContextState: AspirationContextType = {
    aspiration: "",
    setAspiration: () => ""
}
export const AspirationContext = createContext<AspirationContextType>(aspirationContextState);

export const AspirationProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [aspiration, setAspiration] = useState<string>(''); /**FIXME: error occuring with state variables */

    return(
        <AspirationContext.Provider value={{aspiration,setAspiration}}>
            {children}
        </AspirationContext.Provider>
    )
}