import {createContext,useContext} from "react";

export const ThemeContext=createContext({
    themeMode:'light',
    darkTheme:()=>{
        //code for dark theme

    },
    lightTheme:()=>{
        //code for light theme
    }
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}