'use client'
import { ThemeProvider, useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

type Props = {
   children: React.ReactNode
}

export function Providers({ children, ...props }: Props) {
   return (
      <ThemeProvider
         themes={[
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
         ]}
         defaultTheme="light"
         enableSystem={true}
         {...props}
      >
         {children}
      </ThemeProvider>
   )
}

const useThemes = () => {
   const { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme } =
      useTheme()
   const [hydrationFix, setHydrationFix] = useState(false)

   // Hydration Fix
   useEffect(() => {
      setHydrationFix(true)
   }, [])

   return {
      themes,
      theme,
      setTheme,
      forcedTheme,
      systemTheme,
      resolvedTheme,
      hydrationFix,
   }
}

export default useThemes
