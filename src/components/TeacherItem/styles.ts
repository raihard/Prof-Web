import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  .teacher-item {
    margin-bottom: 3rem;
  }

  .teacher-header {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 3rem;
    background: var(--color-box-base);

    & > div {
      display: flex;
      img {
        height: 8rem;
        border-radius: 50%;
      }
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1.5rem;
        font: 700 2.4rem Archivo;
        span {
          font: 400 1.4rem Archivo;
        }
      }
    }

    & > p {
      margin-top: 3rem;
      font: 400 2rem Archivo;
      line-height: 3.2rem;
    }
  }

  .teacher-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    background: var(--color-box-footer);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    justify-content: space-between;

    span {
      color: var(--color-text-complement);
      font: 400 1.4rem Archivo;
      strong {
        display: block;
        color: var(--color-primary-darker);
        font: 700 2rem Archivo;
        @media (min-width: 700px) {
          display: initial;
          margin-left: 1.5rem;
        }
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 3rem;
      border-radius: 1rem;
      border: 0;
      background: var(--color-secundary);
      cursor: pointer;
      transition: all 0.2s;
      span {
        margin-left: 1.5rem;
        color: var(--color-button-text);
        font: 400 2rem Archivo;
      }
      :hover {
        background: ${shade(0.03, '#04bf58')};
        transform: translateY(-5px);
      }
    }
  }
`;
