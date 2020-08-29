import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment2, decrement2 } from "../redux"

function NameComponent() {
  const numOfName2 = useSelector((state) => state.nameReducer2.numOfName2)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Name - {numOfName2} </h2>
      <button onClick={() => dispatch(increment2(5))}>Increment Name...</button>
      <button onClick={() => dispatch(decrement2(5))}>Decrement Name...</button>
    </div>
  )
}

export default NameComponent
