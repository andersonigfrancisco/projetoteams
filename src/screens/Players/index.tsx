import { useState } from 'react';
import { FlatList } from 'react-native'
import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { useRoute } from '@react-navigation/native';

import { PlayerCard } from '@components/PlayerCard';
import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Filter } from '@components/Filter'
import { Input } from '@components/Input';

type RouteParms = {
  group:string
}

export function Players() {

  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Anderson','Telmo'])

  const route =  useRoute();

  const {group} = route.params as RouteParms
  return (
    <Container>

      <Header showBackButton />

      <Highlight
        title={group}
        subtitle='adicione a galera e separe os times'
      />

      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />
      </Form>

      <HeaderList>

        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>


      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}

        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
        
      />

      <Button
        type='SECONDARY'
        title='Remover turma'
      />

    </Container>
  );
}