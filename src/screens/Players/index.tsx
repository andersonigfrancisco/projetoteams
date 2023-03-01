import {Container} from './styles'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';

export function Players(){
  return(
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <Button
        type='SECONDARY'
        title='Remover turma'
      />

    </Container>
  );
}