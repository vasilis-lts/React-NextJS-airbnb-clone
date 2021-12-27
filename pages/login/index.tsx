import FullScreen from "../../components/Fullscreen"
import Image from 'next/image';
import { Button, Input, Stack } from "@chakra-ui/react";
import useAuthState from "../../hooks/useAuthState";


const Login = () => {

  const { setAuthStatus } = useAuthState();

  function submit() {
    setAuthStatus('loggedIn');
  }

  return (
    <FullScreen justifyContent={"center"}>
      <div id="LoginScreen" className="text-center" style={{ width: "300px" }}>
        <Image src={'/vercel.svg'} width={100} height={100} />
        <Stack spacing={3}>
          <h3 style={{ fontWeight: "bold" }}>Enter username and password</h3>
          <br />
          <label className="text-left" htmlFor="username">Username</label>
          <Input placeholder='username' size='md' />
          <label className="text-left" htmlFor="password">Password</label>
          <Input placeholder='password' type={"password"} size='md' />
          <br />
          <Button colorScheme='blue' onClick={() => submit()}>Login</Button>
        </Stack>
      </div>
    </FullScreen>
  )
}

export default Login
