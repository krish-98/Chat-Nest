import React from "react"
import Add from "../../Assets/add.png"
import Cam from "../../Assets/cam.png"
import More from "../../Assets/more.png"

import Messages from "./Messages"
import InputField from "./InputField"

const Chat = () => {
  return (
    <div className="flex-2">
      <div className="flex items-center justify-between p-5 bg-purple-400">
        <h3 className="text-xl font-semi-bold text-white">Tyler</h3>
        <div className="flex items-center gap-1">
          <img className="w-8 cursor-pointer" src={Add} alt="Add friends" />
          <img className="w-8 cursor-pointer" src={Cam} alt="Video chat" />
          <img className="w-8 cursor-pointer" src={More} alt="To know more" />
        </div>
      </div>

      <Messages />

      <InputField />
    </div>
  )
}

export default Chat
