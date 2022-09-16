import React from "react"
import Message from "./Message"

const Messages = () => {
  return (
    <div className="h-[calc(100%-124px)] bg-purple-200 overflow-auto scroll scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-white ">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
