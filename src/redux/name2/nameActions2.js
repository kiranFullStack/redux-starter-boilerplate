import { INCREMENT2 } from "./nameTypes2"
import { DECREMENT2 } from "./nameTypes2"

export const increment2 = (number = 1) => {
  return {
    type: INCREMENT2,
    payload: number,
  }
}

export const decrement2 = (number = 1) => {
  return {
    type: DECREMENT2,
    payload: number,
  }
}
