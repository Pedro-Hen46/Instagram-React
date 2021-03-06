import CachorroCaramelo from './lib/cachorrocaramelo.png';
import MacacoMotorista from './lib/macacomotorista.png';
import CoachingReverso from './lib/coachingreverso.png';
import Cervejinha from './lib/cervejinha.jpg';
import AntiSocialMemes from './lib/antisocialmemes.png';
import MataNoia from './lib/matanoia.png';


export default function SideBar(){

    return(
        <div className="sidebar">
          <div className="user-sidebar flex-center">
            <img
              src={Cervejinha}
              className="sidebar-images espacador-menor mouse-link"
              alt=""
            />
  
            <div className="user-dados">
              <p
                className="negrito espacador-menor mouse-link">pedro.hen_46 </p>
              <p className="subtitulo espacador-menor">Pedro H. Santos</p>
            </div>
          </div>
  
          <div className="sugestoes">
            <p className="titulo negrito mouse-link">Sugestões para você</p>
            <p className="vertudo mouse-link">Ver tudo</p>
          </div>
  
          <div className="perfis-recomendados">
            <img src={ AntiSocialMemes} alt="" className="sidebar-images" />
            <div className="user-dados espacador-menu">
              <p className="titulo mouse-link">bad.vibes.memes</p>
              <p className="subtitulo1">Segue você</p>
            </div>
            <p className="seguir">Seguir</p>
          </div>
  
          <div className="perfis-recomendados">
            <img src={MacacoMotorista} alt="" className="sidebar-images" />
            <div className="user-dados espacador-menu">
              <p className="titulo mouse-link">macaco_Motorista007</p>
              <p className="subtitulo1">Segue você</p>
            </div>
            <p className="seguir">Seguir</p>
          </div>
  
          <div className="perfis-recomendados">
            <img src={ MataNoia} alt="" className="sidebar-images" />
            <div className="user-dados espacador-menu">
              <p className="titulo mouse-link">uberda.Depressão</p>
              <p className="subtitulo1">Segue você</p>
            </div>
            <p className="seguir">Seguir</p>
          </div>
  
          <div className="perfis-recomendados">
            <img src={ CoachingReverso}alt="" className="sidebar-images" />
            <div className="user-dados espacador-menu">
              <p className="titulo mouse-link">coachingReverso</p>
              <p className="subtitulo">Novo no Instagram</p>
            </div>
            <p className="seguir">Seguir</p>
          </div>
  
          <div className="perfis-recomendados">
            <img src={CachorroCaramelo} alt="" className="sidebar-images" />
            <div className="user-dados espacador-menu">
              <p className="titulo mouse-link">adorablesanimals</p>
              <p className="subtitulo1">Segue você</p>
            </div>
            <p className="seguir">Seguir</p>
          </div>
          <p className="about mouse-link">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p className="about mouse-link">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>



    );


}