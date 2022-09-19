import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Google from "../Assets/google.png"

import { auth } from "../firebase.config"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const [values, setValues] = useState({ email: null, password: null })
  const [error, setError] = useState(false)
  const [errMsg, setErrMsg] = useState(null)

  const navigate = useNavigate()

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const login = async (e) => {
    e.preventDefault()

    const { email, password } = values

    if (!email || !password) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        const user = userCredential.user
        console.log(user)
        navigate("/")
      } catch (err) {
        setErrMsg(err.message)
        setTimeout(() => {
          setErrMsg(null)
        }, 3000)
        console.log(err.message)
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-purple-400">
      <div className="flex flex-col items-center gap-6 bg-white py-9 px-9 rounded-xl md:px-20">
        {error && <p>Required fields can't be empty!</p>}
        {errMsg && <p>{errMsg}</p>}
        <div className="flex items-center justify-center gap-3 border border-gray-200 py-3 px-4 rounded-lg ring-1 cursor-pointer w-72">
          <img
            className="w-6 h-6 object-contain"
            src={Google}
            alt="Login with Google"
          />
          <p className="font-bold">Login with Google</p>
        </div>

        <p>OR</p>

        <form onSubmit={login} className="flex flex-col ic w-full">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
          />
          <br />
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
          />

          <button
            className="text-white font-semibold py-2 mt-6 bg-purple-500 rounded-md hover:bg-purple-400"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-2 text-sm">
          <p className="">Don't have an accocunt?</p>
          <Link to="/register" className="underline text-purple-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
