import { Container, ConfigurationContainer} from "./configuration-style";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";

function Musica() {

  const { openMenu } = useAppContext();

  return (
    <ConfigurationContainer>
      <Header />
      <Menu/>
      <Container openMenu={openMenu}>
        <h1>Página de Configurações em construção </h1>
      </Container>
    </ConfigurationContainer>
  )
}

export default Musica;