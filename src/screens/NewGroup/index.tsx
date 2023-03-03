import {useState} from 'react';
import { Container, Content, Icon } from "./styles";
import {useNavigation} from '@react-navigation/native'

import {groupCreate} from '@storage/group/groupCreate'

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";


export function NewGroup() {

  const [group,setGroup] = useState('');

  const navigation = useNavigation();

  async function handlenwe (){
    try {
      await groupCreate(group)
      navigation.navigate('players',{group})
    } catch (error) {
      console.log(error)
    }
    
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

        <Input placeholder="Nome da turma"
          onChangeText={setGroup}
        />

       

        <Button 
          style={{marginTop:20}}
          title="Criar"
          onPress={handlenwe}
        />
      </Content>
    </Container>
  )
}