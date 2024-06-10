import React,{useReducer} from 'react'
import { store,initialState,reducer } from './state.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import appcss from "./app.module.css"
import Personalinfo from './components/personalInfo/Personalinfo.jsx'
import Planinfo from './components/planinfo/Planinfo.jsx'
import Addons from './components/addons/Addons.jsx'

const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <main className={appcss.main}>
      <store.Provider value={[state,dispatch]}>
          <Sidebar/>
          <Personalinfo/>
          <Planinfo/>
          <Addons/>
      </store.Provider>
    </main>
  )
}

export default App

