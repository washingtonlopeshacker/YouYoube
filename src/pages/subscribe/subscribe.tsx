import { Container, SubscribeContainer } from "./subscribe-style";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";

function Subscribe() {

  const { openMenu } = useAppContext();

  return (
    <SubscribeContainer>
      <Header />
      <Menu/>
      <Container openMenu={openMenu}>
        <h1>Página em construção -Aguarde abrir as inscriçoes</h1>
      </Container>
    </SubscribeContainer>
  )
}

export default Subscribe;