import { Container, MusicContainer} from "./music-style";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";

function Musica() {

  const { openMenu } = useAppContext();

  return (
    <MusicContainer>
      <Header />
      <Menu/>
      <Container openMenu={openMenu}>
        <h1>Página em construção - musica</h1>
      </Container>
    </MusicContainer>
  )
}

export default Musica;