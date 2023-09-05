import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primaryColors.primaryBackground};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryColors.primaryText};
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryColors.primaryText};
  margin: 0;
`;

export const LinkContainer = styled.a`
  display: block; // ensures that it takes full width/height
  text-decoration: none; // remove default link styles
  cursor: pointer;

  &:hover {
    // you might want to add some hover styles here
  }
`;

export const GithubLink = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryColors.primaryText};
  margin: 0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primaryColors.accent1};
  }
`;
