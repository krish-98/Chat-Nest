import React, { useContext, useRef, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { ChatContext } from "../../context/ChatContext"

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const ref = useRef()

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" })
  // }, [message])

  return (
    <div
      ref={ref}
      className={`flex flex-row items-center gap-2 py-3 px-2 ${
        message.senderId === currentUser.uid && "flex-row-reverse"
      }`}
    >
      <div className="mb-2 px-2">
        <img
          className="w-9 h-9 object-cover rounded-full"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span className="text-sm text-gray-400">Just Now</span>
      </div>

      <div
        className={`max-w-[80%] flex flex-col gap-4  ${
          message.senderId === currentUser.uid && "items-end "
        }`}
      >
        <p
          className={`bg-white px-4 py-3 max-w-max "rounded-tr-lg rounded-br-lg rounded-bl-lg" ${
            message.senderId === currentUser.uid &&
            "text-white bg-purple-700 rounded-tl-lg rounded-br-lg rounded-bl-lg"
          }
           `}
        >
          {message.text}
        </p>
        {message.img && <img className="w-[50%]" src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message
