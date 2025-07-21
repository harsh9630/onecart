import React from 'react'
import { createContext } from 'react'
export const authDataContext= createContext()
function AuthContexts({children}) {
    let serverUrl = `http://localhost:${import.meta.env.VITE_PORT}`

    let value = {
       serverUrl
    }
  return (

      
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContexts
