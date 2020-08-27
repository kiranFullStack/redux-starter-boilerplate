import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { buyCake, sellCake } from "../redux"

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake...</button>
      <button onClick={() => dispatch(sellCake())}>Sell Cake...</button>
    </div>
  )
}

export default HooksCakeContainer
