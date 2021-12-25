import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAuthState from '../hooks/useAuthState'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* Hello

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  )
}

export default Home
