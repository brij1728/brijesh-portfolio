// ContactStyles.ts
import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  padding: 20px;

  // Add other styles from .container here...

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const MainBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  // Add styles from .mainBg here...

  @media (max-width: 768px) {
    // ...styles for tablet and mobile view
  }
`;

export const MainTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  // Add styles from .mainText here...

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  // Add styles from .title here...

  @media (max-width: 768px) {
    margin-bottom: 10px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ContactButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center; // To make sure button is centered if its container is a flexbox

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;
