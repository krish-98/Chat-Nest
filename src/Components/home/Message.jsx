import React from "react"
import User from "../../Assets/user.jpg"

const Message = () => {
  let owner = false

  return (
    <div
      className={`flex items-center gap-2 py-3 px-2 ${
        owner ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="mb-2 px-2">
        <img className="w-9 h-9 object-cover rounded-full" src={User} alt="" />
        <span className="text-sm text-gray-400">Just Now</span>
      </div>

      <div
        className={`max-w-[80%] flex flex-col gap-4 ${
          owner ? "items-end " : ""
        }`}
      >
        <p
          className={`bg-white px-4 py-3 max-w-max ${
            owner
              ? "text-white bg-purple-700 rounded-tl-lg rounded-br-lg rounded-bl-lg"
              : "rounded-tr-lg rounded-br-lg rounded-bl-lg"
          }`}
        >
          Hello! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          voluptas neque officiis debitis vero expedita quasi numquam minus ipsa
          officia eum quo adipisci quia, dicta sit repudiandae! Perspiciatis,
          quidem magnam?
        </p>
        <img className="w-[50%] " src={User} alt="" />
      </div>
    </div>
  )
}

export default Message
