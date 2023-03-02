import { Container, Form } from './styles'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <Form>
        <Input
          placeholder='Nomde da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon
          icon="add"
        />
      </Form>

      <Button
        type='SECONDARY'
        title='Remover turma'
      />

    </Container>
  );
}