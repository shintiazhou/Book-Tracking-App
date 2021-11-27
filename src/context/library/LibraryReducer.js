import { LibraryTypes } from "./types"



const LibraryReducer = (state, action) => {
    switch (action.type) {
        case LibraryTypes.SET_LIBRARY:
            return {
                ...state,
                library: action.payload
            }

        default:
            return state
    }
}
export default LibraryReducer
