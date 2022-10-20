import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="flex flex-col items-center gap-6 bg-white w-full mx-8 px-8 py-6 rounded-xl md:w-1/2 md:max-w-[420px]">
        <h1 className="text-3xl uppercase font-bold tracking-wide text-text mb-8">
          Chat Nest
        </h1>
        {error && <p>Required fields can't be empty!</p>}
        {errMsg && <p>{errMsg}</p>}

        <form onSubmit={login} className="flex flex-col w-full">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="py-1 outline-none border-b border-b-gray-500"
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
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
            placeholder="********"
            onChange={changeHandler}
          />

          <button
            className="text-white font-semibold py-2 mt-6 bg-text rounded-md hover:bg-layer"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-2 text-sm">
          <p className="">Don't have an account?</p>
          <Link to="/register" className="underline text-text">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
