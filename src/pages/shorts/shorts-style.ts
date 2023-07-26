import styled from "styled-components";

interface ContainerMasterProps {
  openMenu: boolean;
}

export const ContainerMaster = styled.div<ContainerMasterProps>`
  width: 100%;
  max-width: 1200px;
 
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 330px' : '140px 10px 0 100px'};
  box-sizing: border-box;
`;
export const ShortsContainer = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 530px;
  margin-bottom: 50px;
`;

export const Container = styled.div<ContainerMasterProps>`
  width: 100%;
  height: 400px;
  display: flex;
  column-gap: 20px;
  justify-content: center;
  display: grid;
  grid-template-columns: 'repeat(1, 1fr)';
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 330px' : '140px 10px 0 100px'};
  box-sizing: border-box;
`;



export const ShortsLogo = styled.img<ContainerMasterProps>`
  width: 180px;
  height: 90px;
 
`;

export const LogoShort = styled.img<ContainerMasterProps>`
  width: 100px;
  height: auto;
  
`;

