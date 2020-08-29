import { INCREMENT2 } from "./nameTypes2"
import { DECREMENT2 } from "./nameTypes2"

const initialState = {
  numOfName2: 10,
}

const nameReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT2:
      return {
        ...state,
        numOfName2: state.numOfName2 + action.payload,
      }
    case DECREMENT2:
      return {
        ...state,
        numOfName2: state.numOfName2 - action.payload,
      }

    default:
      return state
  }
}

export default nameReducer2
