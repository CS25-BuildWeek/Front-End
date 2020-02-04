import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Global Styling for all buttons
export const ButtonContainer = styled.button`
  border-radius: 1.875rem;
  border: none;
  padding: 0.3125rem 0.625rem;
  color: #fff;
  width: 16rem;
  height: 3rem;
  margin-top: 0.6rem;
  background: #e65400;
  transition: all ease-in 0.2s;
  font-size: 1.5rem;
  &:hover {
    background: #b09c9c;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 60vw;
    height: 2.875rem;
    font-size: 1.5rem;
  }
`;
