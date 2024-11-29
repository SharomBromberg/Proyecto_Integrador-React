import styled from 'styled-components'
import { breakpoints } from '../UI/Breakpoints/breakpoints.js' // Importa el objeto breakpoints

export const FooterContainerStyled = styled.footer`
  height: 11rem;
  background: linear-gradient(
    135deg,
    rgba(56, 92, 170, 1) 10%,
    rgba(63, 218, 241, 1) 25%,
    rgba(60, 14, 84, 1) 35%,
    rgba(198, 93, 101, 1) 45%,
    rgba(62, 5, 59, 1) 55%,
    rgba(85, 8, 60, 1) 65%,
    rgba(8, 15, 32, 1) 75%,
    rgba(6, 11, 25, 1) 90%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #fff;
  text-align: center;
  margin-bottom: 0 !important;
  p span {
    font-weight: 800;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.5rem;
	margin-top: 50%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem;
	margin-top: 35%;
  }
  
`

export const LinksContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ff9300; /* Agrega un color de hover */
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
    a {
      font-size: 0.8rem;
    }
  }
`
