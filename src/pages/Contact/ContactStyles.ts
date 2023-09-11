import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: left;
`;

export const TitleContainer = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3.lg};
  font-weight: 600;
  margin-bottom: 20px;
  align-items: center;
  text-align: left;
  width: 100%;
`;

export const SubtitleContainer = styled.h4`
  display: flex;
  flex-flow: column wrap;
  font-size: ${({ theme }) => theme.fontSizes.h4.lg};
  font-weight: 600;
  margin-bottom: 5px;
  align-items: start;
  justify-content: center;
  width: 100%;
`;

export const TextContainer = styled.p`
  font-weight: 400;
  text-align: left;
  width: 100%;
  margin: 0;
  margin-bottom: 5px;
`;

export const MainBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  justify-content: center;
  text-align: center;
`;
