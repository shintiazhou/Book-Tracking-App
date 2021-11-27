import React, { useReducer } from "react"
import BackdropContext from "./BackdropContext"
import BackdropReducer from "./BackdropReducer"

import { backdropTypes } from "./types"

const BackdropState = (props) => {

    const initialState = {
        isOpen: false,
    };

    const [state, dispatch] = useReducer(BackdropReducer, initialState);

    const toggleBackdrop = (isOpen) => {
        dispatch({
            type: backdropTypes.TOGGLE_BACKDROP_IS_OPEN,
            payload: isOpen
        });
    };


    return (
        <BackdropContext.Provider
            value={{
                isOpen: state.isOpen,
                toggleBackdrop
            }}
        >
            {props.children}
        </BackdropContext.Provider>
    );
};

export default BackdropState;