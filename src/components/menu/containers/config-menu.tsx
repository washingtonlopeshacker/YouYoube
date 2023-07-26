import { useAppContext } from "../../../context/openMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  Link
} from "../menu-styles";
import Config from '../../../assets/config.png'
import complaint from '../../../assets/flag.png'
import Help from '../../../assets/ajuda.png'
import Feedback from '../../../assets/feedback.png'

const items = [
  {icon: Config, description: 'Configurações', link: '/configuration'},
  {icon: complaint, description: 'Histórico de denúncias', link: '/history'},
  {icon: Help, description: 'Ajuda', link: '/subscribe'},
  {icon: Feedback, description: 'Enviar feedback', link: '/library'},
]

function ConfigMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <Link key={index} to={item.link}>
        <MenuItem key={index} openMenu={openMenu}>
          <ButtonIcon alt="Ícone" src={item.icon}/>
          <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
        </MenuItem>
        </Link>
      ))}
    </MenuContainer>
  )
}

export default ConfigMenu;