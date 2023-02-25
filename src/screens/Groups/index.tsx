import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty';


export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Galera do uso o cerebro']);

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

    </Container>
  )
}