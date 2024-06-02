import React,{useReducer} from 'react'
import { store,initialState,reducer } from './state.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import appcss from "./app.module.css"

const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <main className={appcss.main}>
      <store.Provider value={[state,dispatch]}>
          <Sidebar/>
      </store.Provider>
    </main>
  )
}

export default App

