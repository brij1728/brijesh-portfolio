import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding-top: 10px;

  background-color: ${({ theme }) => theme.primaryColors.primary_01};
`;

export const FooterText = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;
