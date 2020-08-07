import React from 'react';

import { Container } from './styles';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <div className="teacher-item">
        <div className="teacher-header">
          <div>
            <img
              src="https://avatars1.githubusercontent.com/u/6075631?s=760&u=3a5632ecc3162b96255deb87229c06b85540b1e6&v=4"
              alt=""
            />
            <div>
              <strong>Radames Deus</strong>
              <span>Matemática</span>
            </div>
          </div>
          <p>
            Entusiasta das melhores tecnologia de quimica avançada. apaixonado
            por explodir coisa em laboratorios e por mudar a vidas das pessoas
            atraves de experiencias. Mais de 200.000 pessoa já passaram por uma
            das minhas explosões.
          </p>
        </div>
        <div className="teacher-footer">
          <span>
            Preço/hora <strong>R$ 20,20</strong>
          </span>
          <button type="button">
            <img src={whatsapp} alt="whatsapp" />
            <span>Entrar em contato</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TeacherItem;
