import { useState } from 'react'
import Login from './components/Login'
import { ChakraProvider } from '@chakra-ui/react'



function App() {

  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

export default App
