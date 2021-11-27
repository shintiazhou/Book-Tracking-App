import React, { useReducer } from "react"
import LibraryContext from "./LibraryContext"
import LibraryReducer from "./LibraryReducer"

import { LibraryTypes } from "./types"

const LibraryState = (props) => {

    const initialState = {
        library: [],
    };

    const [state, dispatch] = useReducer(LibraryReducer, initialState);

    const setLibrary = (list) => {
        dispatch({
            type: LibraryTypes.SET_LIBRARY,
            payload: list
        });
    };


    return (
        <LibraryContext.Provider
            value={{
                library: state.library,
                setLibrary
            }}
        >
            {props.children}
        </LibraryContext.Provider>
    );
};

export default LibraryState;