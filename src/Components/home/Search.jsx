import React from "react"

const Search = () => {
  return (
    <div className="border-b">
      <div>
        <input
          className="w-full outline-none border-none px-2 bg-purple-700 text-white py-2  placeholder:text-gray-200"
          type="text"
          placeholder="Find a user"
        />
      </div>
    </div>
  )
}

export default Search
