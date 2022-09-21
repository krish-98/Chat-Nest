import React, { useContext } from "react"
import { FaUserPlus } from "react-icons/fa"
import { IoVideocam } from "react-icons/io5"
import { MdMoreHoriz } from "react-icons/md"

import Messages from "./Messages"
import InputField from "./InputField"
import { ChatContext } from "../../context/ChatContext"

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className="flex-2">
      <div className="flex items-center justify-between p-5 bg-purple-400">
        <h3 className="text-xl font-semi-bold text-white">
          {data.user?.displayName}
        </h3>

        <div className="flex items-center gap-2">
          <FaUserPlus className="w-6 h-6 cursor-pointer" />
          <IoVideocam className="w-6 h-6 cursor-pointer" />
          <MdMoreHoriz className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      <Messages />

      <InputField />
    </div>
  )
}

export default Chat
