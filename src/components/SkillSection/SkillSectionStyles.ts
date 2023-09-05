import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  /* text-transform: uppercase; */
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 30px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #333;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
    &::after {
      width: 50px;
      height: 3px;
    }
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;
