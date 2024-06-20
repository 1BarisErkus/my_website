import styled from "styled-components";
import { primary, tertiary } from "../../../../../common/colors";

export const A = styled.a`
  color: ${tertiary};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 50px;
  cursor: pointer;
  border-bottom: 1px solid ${primary};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 100px;
  color: ${tertiary};
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 0;
  }
`;
