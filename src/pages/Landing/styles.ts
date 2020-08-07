import styled from 'styled-components';
import { shade } from 'polished';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;
export const Container = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'button button total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  img {
    height: 10rem;
  }
  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    text-align: left;
    grid-area: logo;
    align-self: center;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  @media (min-width: 1100px) {
    grid-area: hero;
    justify-content: end;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-primary-lighter);
    text-decoration: none;
    color: var(--color-button-text);

    font: 700 2rem Archivo;
    width: 30rem;
    height: 10.4rem;
    padding: 1.6rem;
    border-radius: 0.8rem;
    transition: all 0.2s;

    & + a {
      margin-left: 1.6rem;
      background: var(--color-secundary);
    }
    &:hover {
      background: ${shade(0.03, '#916bea')};
      transform: translateY(-5px);
    }
    & + a:hover {
      background: ${shade(0.03, '#04bf58')};
      transform: translateY(-5px);
    }
    img {
      margin-right: 2.4rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: button;
    justify-content: start;
    a {
      font-size: 2.4rem;
    }
  }
`;

export const TotalConections = styled.span`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-content: end;
  }
`;
