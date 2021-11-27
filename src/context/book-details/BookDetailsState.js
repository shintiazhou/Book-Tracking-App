import React, { useReducer } from "react"
import BookDetailsContext from "./BookDetailsContext"
import BookDetailsReducer from "./BookDetailsReducer"

import { BookDetailsTypes } from "./types"

const BackdropState = (props) => {

    const initialState = {
        bookDetails: null,
    };

    const [state, dispatch] = useReducer(BookDetailsReducer, initialState);

    const setBookDetails = (details) => {
        dispatch({
            type: BookDetailsTypes.SET_BOOK_DETAILS,
            payload: details
        });
    };


    return (
        <BookDetailsContext.Provider
            value={{
                bookDetails: state.bookDetails,
                setBookDetails
            }}
        >
            {props.children}
        </BookDetailsContext.Provider>
    );
};

export default BackdropState;