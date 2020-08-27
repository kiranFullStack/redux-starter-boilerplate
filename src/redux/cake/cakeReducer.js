import { BUY_CAKE } from "./cakeTypes"
import { SELL_CAKE } from "./cakeTypes"

const initialState = {
  numOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      }
    case SELL_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      }

    default:
      return state
  }
}

export default cakeReducer
