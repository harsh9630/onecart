import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContexts.jsx'
import axios from 'axios'

export const userDataContext = createContext()

function UserContext({ children }) {
  const [userData, setUserData] = useState(null)
  const { serverUrl } = useContext(authDataContext)

  const getCurrentUser = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/user/getcurrentuser`, {
        withCredentials: true
      })
      setUserData(response.data)
      console.log("User data fetched:", response.data)
    } catch (error) {
      console.error("getCurrentUser failed:", error?.response?.data || error.message)
      setUserData(null)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <userDataContext.Provider value={{ userData, setUserData, getCurrentUser }}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext
