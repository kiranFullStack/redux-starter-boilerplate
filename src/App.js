import React from "react"
import "./App.css"
import HooksCakeContainer from "./components/CakeComponent"
import UsersContainer from "./components/UsersContainer"
import IceCreamComponent from "./components/IcecreamComponent"

function App() {
  return (
    <div className="App">
      <UsersContainer />
      <HooksCakeContainer />
      <IceCreamComponent />

      {/* <ItemContainer cake />
          <ItemContainer />
          <NewCakeContainer />
          <CakeContainer />
          <IceCreamComponent /> */}
    </div>
  )
}

export default App
