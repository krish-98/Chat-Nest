import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

function App(props) {
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
