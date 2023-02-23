import {StatusBar} from 'react-native'

import{Groups} from '@screens/Groups'

export default function App() {

  return (
    <>
    <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent" 
      translucent
    />
     <Groups />
    </>
   
  )
}