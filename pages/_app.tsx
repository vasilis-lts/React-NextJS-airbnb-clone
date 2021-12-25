import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/authContext'
import ProtectedRoutes from "../components/ProtectedRoutes";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedRoutes router={router}>
        <Component {...pageProps} />
      </ProtectedRoutes>
    </AuthProvider>
  )
}

export default MyApp
