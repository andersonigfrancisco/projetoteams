import {useState} from 'react';
import { Alert } from 'react-native';
import { Container, Content, Icon } from "./styles";
import {useNavigation} from '@react-navigation/native'

import {groupCreate} from '@storage/group/groupCreate'
import { AppError } from '../../utils/AppError';

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {

  const [group,setGroup] = useState('');

  const navigation = useNavigation();

  async function handlenwe (){
    try {
      if(group.trim().length===0)
        return Alert.alert("Novo Grupo","Informe o nome da turma")

      await groupCreate(group)

      navigation.navigate('players',{group})

    } catch (error) {
      if(error instanceof AppError)
        Alert.alert("Novo Grupo",error.message)
      else
      Alert.alert("Novo Grupo","Não foi possivel criar um novo grupo")
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