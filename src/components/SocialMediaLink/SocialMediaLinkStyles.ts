import styled from "styled-components";

export const SocialMediaIcon = styled.a<{ size: string }>`
  // ... previous styles ...

  svg {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    color: #3e3e3e;
  }
`;
