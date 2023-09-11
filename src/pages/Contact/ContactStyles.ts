import styled from "styled-components";

export const ContactContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: start;
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: start;
  justify-content: center;
  padding: 16px;
`;

export const TitleContainer = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3.lg};
  font-weight: 600;
  margin-bottom: 16px;
`;

export const SubtitleContainer = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4.lg};
  font-weight: 600;
  margin-bottom: 5px;
`;

export const TextContainer = styled.p`
  font-weight: 400;
  text-align: left;

  margin: 0;
  margin-bottom: 5px;
`;
