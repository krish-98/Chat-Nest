import React from "react"
import Sidebar from "../Components/home/Sidebar"
import Chat from "../Components/home/Chat"

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#7A4495]">
      <div className="flex border border-purple-300 w-[65%] h-[80%] rounded-lg overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home
