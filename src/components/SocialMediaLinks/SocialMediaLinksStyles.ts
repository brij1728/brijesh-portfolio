import styled from "styled-components";

export const SocialMediaList = styled.ul`
  list-style: none; // Remove bullet points
  display: flex; // Display list items in a row
  justify-content: center; // Center the items horizontally
  padding: 0; // Remove default padding
  margin: 0; // Remove default margin
  margin-bottom: 20px; // Add margin at the bottom to space out from the button

  @media (max-width: 768px) {
    li {
      margin: 0 5px; // Less spacing for smaller devices
    }
  }
`;
