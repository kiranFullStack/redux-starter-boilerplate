import { INCREMENT } from "./nameTypes"
import { DECREMENT } from "./nameTypes"

const initialState = {
  numOfName: 10,
}

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        numOfName: state.numOfName + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        numOfName: state.numOfName - action.payload,
      }

    default:
      return state
  }
}

export default nameReducer
