import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../redux"

function NameComponent() {
  const numOfName = useSelector((state) => state.nameReducer.numOfName)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Name - {numOfName} </h2>
      <button onClick={() => dispatch(increment())}>Increment Name...</button>
      <button onClick={() => dispatch(decrement())}>Decrement Name...</button>
    </div>
  )
}

export default NameComponent
