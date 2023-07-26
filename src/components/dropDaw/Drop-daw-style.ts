
import styled from "styled-components";

interface ContainerProps {
    openDropDownMenu: boolean;
  }

export const ButtonContainer = styled.button<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({margin}) => margin? margin : 0};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .4s;
  border: none;
  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const DropDownMenu = styled.div<ContainerProps>`
  width: 230px;
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10 0px;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.1);
  position: absolute;
  top: 8px;
  right: ${({openDropDownMenu}) => openDropDownMenu ? '110px' : '-200px'};
  transition: 0.5s;
`
export const UserInfoContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`;

export const DropDowDivider = styled.div`
  border: none;
  border-top: 2px solid #ccc;
  margin: 1rem 0;
  
`;

export const DropDownMenuContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: ${({theme}) => theme.colors.bgColor};
    cursor: pointer;
  }`;

export const LogOutButton = styled.button`
  border: none;

  
  font-size: 16px;
  font-weight: 300;
  background-color: inherit;
`;

export const Container = styled.div`
width:  230px;
height: calc(60vh - 55px);
box-sizing: border-box;
padding: 10px 10px 10px 10px;
display:flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
position: sticky;
top: 20px;
`;
export const MenuItem = styled.div`
width: 90%;
min-height:70px;
border-radius: 10px;
cursor: pointer;
padding: 2px 17px;
box-sizing: border-box;
display:flex;
flex-direction: row;
align-items: center;
span {
font-weight:  bold;
margin-left: 20px;
font-size: 16px};

:hover {
    background-color: #f2f2f2;
}
`;


export const Divider= styled.div`
    width: 220px;
    border-top: 4px solid #f6f2f2;
  

`;
export const MenuContainer= styled.div`

`;