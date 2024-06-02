import React from 'react'
import sidebarcss from "./sidebar.module.css"

const Sidebar = () => {
  return (
    <aside>
        <nav>
            <a href="/personalinfo">1</a>
            <a href='/selectplan'>2</a>
            <a href="/pickaddons">3</a>
            <a href='/finishingup'>4</a>
        </nav>
    </aside>
  )
}

export default Sidebar;
