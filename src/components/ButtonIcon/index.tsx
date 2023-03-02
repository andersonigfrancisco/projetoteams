import {TouchableOpacityProps} from 'react-native'
import { Container,Icon,ButtonIconTypeStyleProps } from "./styles";


type prop = TouchableOpacityProps & {
 type?:ButtonIconTypeStyleProps
}

export function ButtonIcon({type='PRIMARY',...rest}:prop){
  return(
    <Container>
     <Icon name="home"/>
    </Container>
  )
}