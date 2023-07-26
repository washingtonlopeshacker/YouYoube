import { Container, HistoryContainer} from "./history-style";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";

function Musica() {

  const { openMenu } = useAppContext();

  return (
    <HistoryContainer>
      <Header />
      <Menu/>
      <Container openMenu={openMenu}>
        <h1>Página em construção - Historiy</h1>
      </Container> 
    </HistoryContainer>
  )
}

export default Musica;