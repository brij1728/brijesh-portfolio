import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.primaryColors.primary_02};
`;

export const FooterText = styled.p`
  font-size: 0.8rem;
  color: #fff;
  margin: 0;
`;
