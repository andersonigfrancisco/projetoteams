import { useState } from 'react';
import { FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { Container } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty';
import {Button} from '@components/Button'


export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Galera do uso o cerebro']);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new')
  }

  return (
    <Container>

      <Header />

      <Highlight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />

    </Container>
  )
}