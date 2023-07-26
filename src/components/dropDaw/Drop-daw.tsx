
import { 
    ButtonContainer, 
    ButtonIcon, 
    DropDownMenu,
    DropDownMenuContent,
    LogOutButton,
    UserInfoContainer,
    UserName,
    DropDowDivider,
    Container, 
    MenuItem,
    Divider,
    MenuContainer,
} from "./Drop-daw-style";

import { useNavigate } from "react-router-dom";

import NotificationIcon  from '../../assets/sino.png';
import VideoIcon from '../../assets/camera-video.png';
import CamadasIcon from '../../assets/camadas.png';
import NewsIcon from '../../assets/news.png';
import CasaIcon from '../../assets/casa.png';

import ShortsIcon from '../../assets/almoco-foguete.png';
import UsuariosIcon from '../../assets/usuarios-alt.png';
import EstrelaIcon from '../../assets/estrela.png';
import ComenteIcon from '../../assets/comente.png';
import logout from '../../assets/logout.png'
import Config from '../../assets/config.png'



import { useContext,} from "react";
import { UserContext } from "../../context/userContext";
  
const DropDaw = () => { 
const items= [
    {name: 'Inicio', link: '/', url: CasaIcon},
    {name: 'Biblioteca', link:'/library', url: CamadasIcon},
    {name: 'Histórico', link:'/history', url: NewsIcon },
    {name: 'configurações', link:'/configuration', url: Config },
    
]

const items2= [
    {name: 'Shorts', link:'/Shorts', url: ShortsIcon},
    {name: 'Seus Videos', link:'/yourvideos',url: VideoIcon},
    {name: 'musica', link:'/music',url: UsuariosIcon}
]

const items3= [
    {name: 'inscrições', link:'/subscribe', url: EstrelaIcon},
    {name: 'opções', link:'/opition',url: NotificationIcon},
    {name: 'mensagens', link:'/mensagem',url: ComenteIcon}
]


    const { user, logOut, openDropDownMenu, setOpenDropDownMenu} = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleDropDownMenu = () => {
        setOpenDropDownMenu(!openDropDownMenu)
      }

      const goOut = () => {
        logOut()
        handleDropDownMenu()
        navigate('/')
      }

      const goShorts = () => {
        handleDropDownMenu()
        navigate('/shorts')
      }
    
      const goYourVideos = () => {
        navigate('/yourvideos')
        handleDropDownMenu()
      } 
  return (
<DropDownMenu openDropDownMenu={openDropDownMenu}>
  
<UserInfoContainer>
  <ButtonContainer 
    margin='0 0 0 10px' 
    onClick={handleDropDownMenu} 
    style={{backgroundColor: '#f2f2f2'}}
    >
    {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
    </ButtonContainer>
    <UserName>{user && user.nome ? user.nome : ''}</UserName>
    </UserInfoContainer>
  <DropDowDivider/>
    <DropDownMenuContent onClick={goOut}>
      <ButtonIcon alt="ícone logout" src={logout} />
      <LogOutButton>
        Sair
      </LogOutButton>
    </DropDownMenuContent>

  <DropDownMenuContent onClick={goYourVideos}>
    <ButtonIcon alt="ícone logout" src={VideoIcon} />
    <LogOutButton>
      Seus vídeos
    </LogOutButton>
  </DropDownMenuContent>

  <DropDownMenuContent onClick={goShorts}>
    <ButtonIcon alt="ícone logout" src={ShortsIcon} />
    <LogOutButton>
      Shorts
    </LogOutButton>
  </DropDownMenuContent>

  <DropDowDivider/>
    <Container >
          {items.map((item)=>(

          <MenuItem onClick={() => navigate(item.link)}>
              <ButtonIcon alt=""src={  (item.url)}/>
              <span>{item.name}</span>
          </MenuItem>
          ))}
      <Divider/>

      <MenuContainer >
          {items2.map((item2)=>(

          <MenuItem  onClick={() => navigate(item2.link)}>
              <ButtonIcon alt= "" src={(item2.url)}/>
              <span>{item2.name}</span>
              
          </MenuItem>
          ))}
      <Divider/>
      </MenuContainer>
          
          <MenuContainer >
          {items3.map((item3)=>(

          <MenuItem onClick={() => navigate(item3.link)}>
              <ButtonIcon alt= "" src={(item3.url)}/>
              <span>{item3.name}</span>
              
          </MenuItem>
          ))}
          </MenuContainer> 
    </Container>

  </DropDownMenu>
  )
 }

export default DropDaw;