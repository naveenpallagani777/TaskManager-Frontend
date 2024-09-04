import React, { useState,useEffect } from "react";

// Naming the context in PascalCase as per React conventions
export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
    let [list, setList] = useState([
        {"color":"#123123", "name":"Personal","count":0},
        {"color":"#45ff67", "name":"Office","count":0}
    ]);
    let [inputpage,setInputPage] = useState(false);
    let [page, setPage] = useState("TODAY");
    let [dark, setDark] = useState("");
    let [mode,setMode] = useState(false);
    let [moblieView,setMoblieView] = useState("");

    return (
        <UserContext.Provider value={{ list, setList, page, setPage, mode, setMode, dark, setDark,inputpage, setInputPage, moblieView, setMoblieView}}>
            {children}
        </UserContext.Provider>
    );
};
