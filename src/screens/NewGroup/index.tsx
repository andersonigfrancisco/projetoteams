import { Container, Content, Icon } from "./styles";
import {useNavigation} from '@react-navigation/native'

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";


export function NewGroup() {

  const navigation = useNavigation();

  function handlenwe (){
    navigation.navigate('players',{group:'Anderson'})
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        
        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma"/>

       

        <Button 
          style={{marginTop:20}}
          title="Criar"
          onPress={handlenwe}
        />
      </Content>
    </Container>
  )
}