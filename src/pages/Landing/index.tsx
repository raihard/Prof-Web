import React from 'react';
import { Link } from 'react-router-dom';

import {
  PageLanding,
  Container,
  LogoContainer,
  Buttons,
  TotalConections,
  HeroImg,
} from './styles';
import Logo from '../../assets/images/logo.svg';
import LogoLanding from '../../assets/images/landing.svg';
import iconStudy from '../../assets/images/icons/study.svg';
import iconGiveClasses from '../../assets/images/icons/give-classes.svg';
import purpleheart from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <Container>
        <LogoContainer>
          <img src={Logo} alt="" />
          <h2>Sua plataforma de estudo online.</h2>
        </LogoContainer>
        <HeroImg src={LogoLanding} alt="" />
        <Buttons>
          <Link to="TeacherForm">
            <img src={iconStudy} alt="" />
            Estudar
          </Link>
          <Link to="TeacherList">
            <img src={iconGiveClasses} alt="" />
            Dar aula
          </Link>
        </Buttons>
        <TotalConections>
          Total de 200 conexões já realizadas <img src={purpleheart} alt="" />
        </TotalConections>
      </Container>
    </PageLanding>
  );
};
export default Landing;
