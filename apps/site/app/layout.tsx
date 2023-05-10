'use client'
import { GlobalProvider } from '@/context/store'
import './globals.css'
import { Providers } from '@/context/themeProvider'

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body>
            <Providers>
               <GlobalProvider>{children}</GlobalProvider>
            </Providers>
         </body>
      </html>
   )
}
