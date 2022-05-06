import Cervejinha from './lib/cervejinha.jpg';




export default function SideBar(){

    return(
        <div class="sidebar">
          <div class="user-sidebar flex-center">
            <img
              src={Cervejinha}
              class="sidebar-images espacador-menor mouse-link"
              alt=""
            />
  
            <div class="user-dados">
              <p
                class="negrito mouse-link espacador-menor mouse-link espacador-menor"
              >
                pedro.hen_46
              </p>
              <p class="normal subtitulo espacador-menor">Pedro H. Santos</p>
            </div>
          </div>
  
          <div class="sugestoes">
            <p class="titulo negrito mouse-link">Sugestões para você</p>
            <p class="titulo mouse-link">Ver tudo</p>
          </div>
  
          <div class="perfis-recomendados">
            <img src="/lib/antisocialmemes.png" alt="" class="sidebar-images" />
            <div class="user-dados espacador-menu">
              <p class="titulo mouse-link">bad.vibes.memes</p>
              <p class="subtitulo">Segue você</p>
            </div>
            <p class="seguir mouse-link">Seguir</p>
          </div>
  
          <div class="perfis-recomendados">
            <img src="/lib/macacomotorista.png" alt="" class="sidebar-images" />
            <div class="user-dados espacador-menu">
              <p class="titulo mouse-link">macaco_Motorista007</p>
              <p class="subtitulo">Segue você</p>
            </div>
            <p class="seguir mouse-link">Seguir</p>
          </div>
  
          <div class="perfis-recomendados">
            <img src="/lib/uberdadepressao.png" alt="" class="sidebar-images" />
            <div class="user-dados espacador-menu">
              <p class="titulo mouse-link">uberda.Depressão</p>
              <p class="subtitulo">Segue você</p>
            </div>
            <p class="seguir mouse-link">Seguir</p>
          </div>
  
          <div class="perfis-recomendados">
            <img src="/lib/coachingreverso.png" alt="" class="sidebar-images" />
            <div class="user-dados espacador-menu">
              <p class="titulo mouse-link">coachingReverso</p>
              <p class="subtitulo">Novo no Instagram</p>
            </div>
            <p class="seguir mouse-link">Seguir</p>
          </div>
  
          <div class="perfis-recomendados">
            <img src="/lib/hornetera.jpg" alt="" class="sidebar-images" />
            <div class="user-dados espacador-menu">
              <p class="titulo mouse-link">adorablesanimals</p>
              <p class="subtitulo">Segue você</p>
            </div>
            <p class="seguir mouse-link">Seguir</p>
          </div>
          <p class="about mouse-link">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p class="about mouse-link">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>



    );


}