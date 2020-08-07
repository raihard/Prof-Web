import React from 'react';

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
const TeacherForm: React.FC = () => {
  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        subTitle="O primeiro passo, preecher esse formulário de inscrição."
      ></PageHeader>
    </Container>
  );
};

export default TeacherForm;
