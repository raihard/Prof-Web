import React from 'react';

import { Link } from 'react-router-dom';

import { PageLanding, Container } from './styles';

import Logo from '../../assets/images/logo.svg';
import Back from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
  title: string;
  subTitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <Container>
      <header>
        <div className="top-bar-header">
          <Link to="/">
            <img src={Back} alt="" />
          </Link>
          <img src={Logo} alt="" />
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          {!!props.subTitle ? <span>{props.subTitle}</span> : ''}
          {props.children}
        </div>
      </header>
    </Container>
  );
};

export default PageHeader;
