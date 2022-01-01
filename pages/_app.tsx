import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/authContext'
import ProtectedRoutes from "../components/ProtectedRoutes";
import { ChakraProvider } from '@chakra-ui/react'
import { MapProvider } from '../context/mapContext';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <MapProvider>
        <ProtectedRoutes router={router}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </ProtectedRoutes>
      </MapProvider>
    </AuthProvider>
  )
}

export default MyApp
