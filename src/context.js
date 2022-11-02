import React from "react"
import { useEffect, useState, useContext } from "react";
import useFetch from "./useFetch"

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_ACCESS_KEY}`;
const colorTheme = localStorage.colorTheme ? localStorage.colorTheme : '';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [term, setTerm] = useState("avengers");
    const [movies, setMovies] = useState([]);
    const [msgErr, setMsgErr] = useState({show: false, msg: ""});
    const {data, loading, err} = useFetch(`${API_ENDPOINT}&s=${term}`);
    const [theme, setTheme] = useState(colorTheme);

    useEffect(() => {
        if(data){
            if(data.Response === "True"){
                setMovies(data.Search);
                setMsgErr({show: false, msg: ""});
            } else {
                setMovies([]);
                setMsgErr({show: true, msg: data.Error});
            }
        }
    }, [data])

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme])

    return (
        <AppContext.Provider value={{movies, msgErr, term, setTerm, loading, err, setTheme, theme}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext);

export {AppProvider, useGlobalContext}