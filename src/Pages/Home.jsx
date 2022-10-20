import React from "react"
import Sidebar from "../Components/home/Sidebar"
import Chat from "../Components/home/Chat"

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#251B37]">
      <div className="flex w-[65%] h-[80%] rounded-lg overflow-hidden bg-text">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home
