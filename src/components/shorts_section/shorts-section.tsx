import CardShortVideo from "../cards-shorts-videos/card-short-video";
import { Container, Divider, MainContainer, ShortsLogo } from "./shorts-section-style";
import LogoShorts from '../../assets/logo-shorts.png';
import { useAppContext } from "../../context/openMenu";

function ShortsSection() {

  const { openMenu } = useAppContext();

  return (
    <MainContainer>
      <Divider />
      <ShortsLogo alt="logo Shorts" src={LogoShorts} openMenu={openMenu}/>
      <Container>
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/hVh32Ase4FQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBl0jVw-y2nOCUJYC8woryqJChsbw"
        title="TABELA DO BRASILEIRÃO PÓS 7ª RODADA..." 
        details="156 mil visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/m3eqjwoghhU/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLC6nvJRZxs1p3Dr0S1lxHPvfkXkGA"
        title="evolution kylian mbappé (1998-2022),#shortsfeed #shorts #viral" 
        details="167 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/B8Qawk4c4bw/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDbT1R5a-iEl7RljVGEWjV4jm797A"
        title="MEU PS5 CHEGOU  #SHORTS..." 
        details="4,1 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/B5AWtkqAISQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAAfv3p_axkwoq28POxJ1S0yUBgTw"
        title="MOMENTO FOFURA!😍 GABIGOL COM FILHO DO EVERTON RIBEIRO!❤️🖤 #shorts #futebol #flamengo" 
        details="1,3 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/srhoxNJeNxo/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAE1Whi-u5GM97vsuVmG5Bam1pw2w"
        title="Jurassic park SPINOSAURUS vs indominus rex ,RAMPAGE RALPH..." 
        details="20 mi de visualizações"
        />
        <CardShortVideo 
        thumbnail="https://i.ytimg.com/vi/KUhpj5dQack/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCTqHH2HtODhma9TMD0QD0E8sKXww"
        title="skibidi toilet 18 #SHORTS" 
        details="50 mi de visualizações"
        />
      </Container>
    </MainContainer>
  )
}

export default ShortsSection;