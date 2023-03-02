import { Container, Logo, BackIcon, BackButton } from "./styles";
import {useNavigation} from '@react-navigation/native'

import logoImg from '@assets/logo.png'

type props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: props) {

  const navigation = useNavigation();

  return (
    <Container>
      {
        showBackButton &&

        <BackButton onPress={()=>navigation.navigate('groups')}>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  )
}