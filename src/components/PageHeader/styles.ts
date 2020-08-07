import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  header {
    width: 100vw;
    background: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-bar-header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      height: 2rem;
    }
  }

  .header-content {
    width: 90%;
    margin: 3.2rem auto;
    position: relative;
    max-width: 400px;
    color: var(--color-title-in-primary);
    /* border: 1px solid #000; */
    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      max-width: 350px;
    }
    span {
      display: block;
      margin-top: 2.4rem;
      color: var(--color-text-in-primary);
      font: 400 2rem Archivo;
      max-width: 350px;
    }
  }

  @media (min-width: 700px) {
    .top-bar-header {
      max-width: 1100px;
    }
    .header-content {
      max-width: 100%;
      height: 300px;
      max-width: 740px;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
`;
