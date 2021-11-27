import { backdropTypes } from "./types"



const backdropReducer = (state, action) => {
    switch (action.type) {
        case backdropTypes.TOGGLE_BACKDROP_IS_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen
            }

        default:
            return state
    }
}
export default backdropReducer
