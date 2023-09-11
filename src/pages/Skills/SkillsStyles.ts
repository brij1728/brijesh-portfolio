import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: start;
`;

export const SkillTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3.lg};
  font-weight: 600;
  align-items: center;
  padding: 16px;
`;

export const SkillList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 10px;
`;
