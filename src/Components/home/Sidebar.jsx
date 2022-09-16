import React from "react"
import Navbar from "../home/Navbar"
import Search from "../home/Search"
import Chats from "../home/Chats"

const Sidebar = () => {
  return (
    <div className="flex-1 bg-purple-300">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar
