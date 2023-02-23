import {StatusBar} from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index'

import{Groups} from '@screens/Groups'

export default function App() {

  return (

    <ThemeProvider theme={theme}>

      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent
      />

      <Groups />
      
    </ThemeProvider>
   
  )
}
