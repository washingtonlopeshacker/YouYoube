import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    Logo, 
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons, 
    LinkLogo,
    LoginContainer,
    LoginButton,
    Span,
    LoginIcon,
    ClearButton,
    CloseImg,
    ButtonContainerUser
  } from "./header-style";

  import Menu from '../../assets/menu.png'
  import Logoyt from '../../assets/logoyoutube.png'
  import Lupa from '../../assets/search.png'
  import Mic from '../../assets/microfone.png'
  import Sino from '../../assets/sino.png'
  import Video from '../../assets/videoicon.png'
  import LoginIconPng from '../../assets/login-icon.png'
  import CloseIcon from '../../assets/close.png'
  import { useAppContext } from "../../context/openMenu";
  import { useNavigate } from "react-router-dom";
  import { useContext, useRef, useState} from "react";
  import { UserContext } from "../../context/userContext";
  import { useSearchContext } from "../../context/searchContext";
  import { useCategoryContext } from "../../context/searchCategories";
  import DropDaw from "../dropDaw/Drop-daw";
  
  
  
  const Header: React.FC = () => {
  
    const { openMenu, setOpenMenu } = useAppContext();
  
    const [clearButton, setClearButton] = useState(false)
  
    const navigate = useNavigate();
  
    const handleMenuClick = () => {
      setOpenMenu(!openMenu);
    };
  
    const { login,  user, openDropDownMenu, setOpenDropDownMenu } = useContext(UserContext)
  
    
  
    const handleDropDownMenu = () => {
      setOpenDropDownMenu(!openDropDownMenu)
    }
  
    const {setSearch} = useSearchContext()
  
    const [inputValue, setInputValue] = useState('')
  
    function handleInput(inputValue: string) {
      setInputValue(inputValue)
      if(inputValue === '') {
        setClearButton(false)
      } else (
        setClearButton(true)
      )
    }
  
    const inputRef = useRef<HTMLInputElement>(null);
  
    const clearInput = () => {
      setInputValue('')
      setClearButton(false)
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  
   
  
    const {setCategoryId} = useCategoryContext()
  
  
    return (
      <Container>
  
        <LogoContainer>
  
          <ButtonContainer onClick={handleMenuClick} margin='0 10px 0 0'>
            <ButtonIcon alt="logo menu" src={Menu}/>
          </ButtonContainer>
  
          <LinkLogo to='/' onClick={() => setCategoryId('0')}>
            <Logo alt="logo youtube" src={Logoyt} />
          </LinkLogo>
  
        </LogoContainer>
  
        <SearchContainer>
  
          <SearchInputContainer>
            <SearchInput
              ref={inputRef}
              value={inputValue} 
              placeholder="Pesquisar" 
              onChange={(e) => {
                handleInput(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(inputValue)
                  navigate('/search')
                }
              }}
            />
            <ClearButton 
              clearButton={clearButton}
              onClick={clearInput}
            >
  
              <CloseImg src={CloseIcon}/>
              
            </ClearButton>
          </SearchInputContainer>
  
          <SearchButton 
            onClick={() => {
              if (inputValue.trim() === '') {
                alert('Digite alguma palavra chave antes de tentar pesquisar')
                return;
              }
              setSearch(inputValue)
              navigate('/search')
            }
          }>
            <ButtonIcon alt="ícone lupa" src={Lupa}/>
          </SearchButton>
  
          <ButtonContainer margin='0 0 0 10px'>
            <ButtonIcon alt="ícone microfone" src={Mic}/>
          </ButtonContainer>
  
        </SearchContainer>
  
        {login?
          <HeaderButtons>
            <ButtonContainer margin='0 0 0 10px'>
              <ButtonIcon alt="ícone vídeo" src={Video}/>
            </ButtonContainer>
  
            <ButtonContainer margin='0 0 0 10px'>
              <ButtonIcon alt="ícone notificação" src={Sino}/>
            </ButtonContainer>
  
            <ButtonContainerUser margin='0 0 0 10px' onClick={handleDropDownMenu} >
              {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
            </ButtonContainerUser>
            
            <DropDaw/>
  
          </HeaderButtons>
          :
          <LoginContainer onClick={() => navigate('/login')}>
            <LoginButton>
              <LoginIcon  src={LoginIconPng} >
                </LoginIcon>
              <Span>Fazer login</Span>
            </LoginButton>
          </LoginContainer>
        }
  
  
      </Container>
    )
  }
  
  export default Header;