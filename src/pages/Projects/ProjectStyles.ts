import styled, { css } from "styled-components";

export const ProjectContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: start;
`;

export const ProjectHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3.lg};
  color: ${({ theme }) => theme.primaryColors.titleText};
  font-weight: 600;
  align-items: center;
  padding: 16px;
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: max-content;
  gap: 10px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column nowrap;
    }
  `}
`;
