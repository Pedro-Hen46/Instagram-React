import './css/estilos.css';
import Logo from './lib/logo.png'


export default function NavMenu(){

    return(
        <div className="menu">
            <div className="menu-esquerdo">
                <ion-icon
                name="logo-instagram"
                className="icones-menu mouse-link"
                ></ion-icon>
                <div className="linha-vertical espacador-perfil"></div>
                <img
                src={Logo}
                alt="Logo do Instagram"
                className="logo-imagem mouse-link"
                />
            </div>

                <div className="menu-central flex-center">
                <div className="pesquisa-div border-padrao flex-center">
                <p className="subtitulo mouse-link">Pesquisar</p>
                </div>
                </div>

                <div className="menu-direita flex-center">
                    <ion-icon
                    name="paper-plane-outline"
                    className="icones-menu espacador-menu mouse-link"
                    ></ion-icon>
                    <ion-icon
                    name="compass-outline"
                    className="icones-menu espacador-menu mouse-link"
                    ></ion-icon>
                    <ion-icon
                    name="heart-outline"
                    className="icones-menu espacador-menu mouse-link"
                    ></ion-icon>
                    <ion-icon
                    name="person-outline"
                    className="icones-menu espacador-menu mouse-link"
                    ></ion-icon>
                 </div>

                <div className="menu menu-mobile">
                    <ion-icon
                        name="logo-instagram"
                        className="icones-menu espacador-menu mouse-link"
                    ></ion-icon>
                    <img
                        src={Logo}
                        alt="Logo do Instagram"
                        className="logo-imagem mouse-link"
                    />
                    <ion-icon
                        name="paper-plane-outline"
                        className="icones-menu espacador-menu mouse-link"
                    ></ion-icon>
                </div>

    </div>

      

    );
}