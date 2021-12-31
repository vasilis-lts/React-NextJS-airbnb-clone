import React from 'react'
import { Button } from '@chakra-ui/react'
import useAuthState from '../hooks/useAuthState'

const links = [
  { href: 'https://github.com/rajeshdh/react-leaflet-with-nextjs', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {

  const { setAuthStatus } = useAuthState();

  return (
    <nav>
      <Button colorScheme={'transparent'} onClick={() => console.log("Does nothing yet")} >Dashboard</Button>
      <Button colorScheme={'transparent'} onClick={() => setAuthStatus("anonymous")} >Sign Out</Button>

      <style jsx>{`
      nav {
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color:#147098;
      }
    `}</style>
    </nav>
  )
}

export default Nav
