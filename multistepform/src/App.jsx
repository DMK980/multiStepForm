import React,{useReducer} from 'react'
import appcss from "./App.module.css"
import { store,initialState,reducer } from './state.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'

const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <store.Provider value={[state,dispatch]}>
      <main>
        <Sidebar/>
      </main>
    </store.Provider>
  )
}

export default App

