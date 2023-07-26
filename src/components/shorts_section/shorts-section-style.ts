import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 530px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  column-gap: 20px;
  justify-content: center;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 4px solid #ccc;
  margin: 2rem 0 0 0;
  width: 100%;
  border-radius: 25px;
`;

export const ShortsLogo = styled.img<ContainerProps>`
  width: 150px;
  height: 80px;
  margin-left: ${({openMenu}) => openMenu? '0' : '100px'};
`;