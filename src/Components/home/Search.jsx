import React from "react"
import { BsSearch } from "react-icons/bs"

const Search = () => {
  return (
    <div className="flex items-center bg-purple-700 text-white border-b py-1">
      <span className="pl-2">
        <BsSearch />
      </span>
      <input
        className="w-full outline-none border-none px-3 bg-purple-700 py-2 text-lg placeholder:text-gray-200"
        type="text"
        placeholder="Find a user"
      />
    </div>
  )
}

export default Search
