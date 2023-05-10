'use client'
import React, { useState } from 'react'

type Props = {
   children: React.ReactNode
}

interface contextProps {
   view: boolean
   setView: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalContext = React.createContext<contextProps>({
   view: false,
   setView: () => {},
})

export const GlobalProvider = ({ children }: Props) => {
   const [view, setView] = useState(false)

   return (
      <GlobalContext.Provider value={{ view, setView }}>
         {children}
      </GlobalContext.Provider>
   )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
