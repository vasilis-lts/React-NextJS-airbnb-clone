import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/authContext'
import ProtectedRoutes from "../components/ProtectedRoutes";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedRoutes router={router}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProtectedRoutes>
    </AuthProvider>
  )
}

export default MyApp
