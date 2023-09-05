import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      padding: 10px;
    }
  `}
`;

export const SectionWrapper = styled.div`
  margin-top: 40px;

  &:first-child {
    margin-top: 0;
  }
`;
