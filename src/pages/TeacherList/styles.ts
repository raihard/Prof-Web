import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  #search-teachers {
    margin-top: 3.2rem;

    label {
      color: var(--color-text-in-primary);
    }
    .input-block {
      position: relative;
      label {
        font-size: 1.4rem;
      }
      input {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
      }
      & + .input-block {
        margin-top: 1.5rem;

        @media (min-width: 700px) {
          margin-top: 0;
        }
      }
    }

    .input-block:focus-within ::after {
      width: calc(100% -3.2rem);
      height: 2px;
      content: '';
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
      background: var(--color-primary-light);
    }
  }

  @media (min-width: 700px) {
    #search-teachers {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }
  }
`;
export const Main = styled.div`
  width: 90%;
  margin: 3.2rem auto;
  margin-top: 6rem;

  @media (min-width: 700px) {
    max-width: 740px;
  }
`;
