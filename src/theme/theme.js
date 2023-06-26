import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
      body: {
        bg: mode('#e6e3e1', '#121215')(props)
      }
    })
  }


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  }

  const theme = extendTheme({ config, styles})
  export default theme