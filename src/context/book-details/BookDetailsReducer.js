import { BookDetailsTypes } from "./types"



const BookDetailsReducer = (state, action) => {
    switch (action.type) {
        case BookDetailsTypes.SET_BOOK_DETAILS:
            return {
                ...state,
                bookDetails: action.payload
            }

        default:
            return state
    }
}
export default BookDetailsReducer
