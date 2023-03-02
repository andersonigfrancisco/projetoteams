import {TouchableOpacityProps} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container,Icon,ButtonIconTypeStyleProps } from "./styles";


type prop = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?:ButtonIconTypeStyleProps
}

export function ButtonIcon({icon,type='PRIMARY',...rest}:prop){
  return(
    <Container>
     <Icon 
      name={icon}
      type={type}
     />
    </Container>
  )
}