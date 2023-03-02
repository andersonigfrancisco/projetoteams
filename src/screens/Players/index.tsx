import {Container} from './styles'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players(){
  return(
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <ButtonIcon/>
      
      <Button
        type='SECONDARY'
        title='Remover turma'
      />

    </Container>
  );
}