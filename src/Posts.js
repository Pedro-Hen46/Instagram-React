import CachorroCaramelo from './lib/cachorrocaramelo.png';
import MacacoMotorista from './lib/macacomotorista.png';
import CoachingReverso from './lib/coachingreverso.png';
import Cervejinha from './lib/cervejinha.jpg';
import AntiSocialMemes from './lib/antisocialmemes.png';
import MataNoia from './lib/matanoia.png';
import RespondeAi from './lib/respondeai.png';
import Mulher1 from './lib/mulher1.png';
import Hornetera from './lib/hornetera.jpg';
import Academia from './lib/academia.jpg';
import Tomarrolandi from './lib/tumarulandi.jpg';
import VideoAuto from './lib/video.mp4';

export default function Posts(){

    return (
        <div className="conteudo">
        <div className="stories-div border-padrao flex-center">
          <div className="icone-absolute mouse-link">
            <ion-icon
              name="chevron-forward-circle"
              className="icone-sobreposto"
            ></ion-icon>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img
              src={CachorroCaramelo}
              alt=""
              className="stories-imagens"
            />
            <p className="username">Caramelo</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img
              src={MacacoMotorista}
              alt=""
              className="stories-imagens"
            />
            <p className="username">Macaco</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img
              src={CoachingReverso}
              alt=""
              className="stories-imagens"
            />
            <p className="username">Migro</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img
              src={AntiSocialMemes}
              alt=""
              className="stories-imagens"
            />
            <p className="username">Miguel</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img src={MataNoia} alt="" className="stories-imagens" />
            <p className="username">Matador</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img src={RespondeAi} alt="" className="stories-imagens" />
            <p className="username">Responde</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img src={Mulher1} alt="" className="stories-imagens" />
            <p className="username">Sophia</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img src={ Hornetera } alt="" className="stories-imagens" />
            <p className="username">Arthur</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img src={ Academia } alt="" className="stories-imagens" />
            <p className="username">Lindinha69</p>
          </div>
          <div className="people-storie espacador-menu mouse-link">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGD4Gwl6JplaQ/profile-displayphoto-shrink_200_200/0/1635393716349?e=2147483647&v=beta&t=vjHVt15odaBh5I6Fnx50vLDPaveid-U0ArBnJMNh8O8"
              alt=""
              className="stories-imagens"
            />
            <p className="username">Pedrao</p>
          </div>
        </div>


        <div className="post border-padrao">
          <div className="cabecalho-post">
            <img
              src={ MacacoMotorista}
              className="postuser-imagens mouse-link"
              alt=""
            />
            <p className="username espacador-menu mouse-link">MacacoComunista</p>
            <div className="icon-post">
              <ion-icon
                name="ellipsis-horizontal-outline"
                className="mouse-link"
              ></ion-icon>
            </div>
          </div>
    

          <video width="614" height="614" autoPlay muted loop={true}>
            <source src={VideoAuto} type="video/mp4" />
            Seu navegador não suporta HTML5.
          </video>

          <div className="icones-post">
            <ion-icon
              name="heart-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="chatbubble-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <div className="icon-post icones-menu mouse-link">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="comentarios-post">
            <img
              src={Tomarrolandi}
              className="postuser-comentarios mouse-link"
              alt=""
            />
            <p className="username">Curtido por</p>
            <p className="negrito mouse-link mouse-link mouse-link">
              Putin_Rebaixado
            </p>
            <p className="username">e</p>
            <p className="negrito mouse-link mouse-link">outras 666 pessoas</p>
          </div>

    
          <div className="interacao-comentarios">
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src="https://pbs.twimg.com/media/EcK-T09XYAQeztA?format=jpg&name=900x900"
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link mouse-link">
                  Putin_Rebaixado
                </p>

                <p className="username">
                  Esse ai ta perfeito pra fazer de montaria.
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/220px-Joe_Biden_presidential_portrait.jpg"
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link mouse-link">
                  João Biden ✓
                </p>

                <p className="username">
                  @@Putin_Rebaixado infantil, vou tacar uma bomba na sua cabeça
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="comentar">
              <ion-icon
                name="happy-outline"
                className="icones-menu mouse-link"
              ></ion-icon>
              <input
                type="text"
                placeholder="Digite aqui o seu comentario..."
              />
              <button type="submit">Publicar</button>
            </div>
          </div>
    
        </div>

        <div className="post border-padrao">
          <div className="cabecalho-post">
            <img
              src={Cervejinha}
              className="postuser-imagens mouse-link"
              alt=""
            />
            <p className="username espacador-menu mouse-link">Pedro.hen_46</p>
            <div className="icon-post">
              <ion-icon
                name="ellipsis-horizontal-outline"
                className="mouse-link"
              ></ion-icon>
            </div>
          </div>
    

          <img src={Cervejinha} alt="" className="imagem-postada" />

          <div className="icones-post">
            <ion-icon
              name="heart-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="chatbubble-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <div className="icon-post icones-menu mouse-link">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="comentarios-post">
            <img
              src={Tomarrolandi}
              className="postuser-comentarios mouse-link"
              alt=""
            />
            <p className="username">Curtido por</p>
            <p className="negrito mouse-link mouse-link">Kathllen_Vitoria</p>
            <p className="username">e</p>
            <p className="negrito mouse-link mouse-link">outras 914 pessoas</p>
          </div>

    
          <div className="interacao-comentarios">
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src="https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2015/05/14/fernandinhobeiramarbrunnodantastjrj02.jpg"
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link mouse-link">
                  Fernandinho Beiramar
                </p>

                <p className="username">
                  Nem me chamou pro role, e estou precisando daquele dinheiro.
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src="data:image/jpeg;base64,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"
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">Celso Rusumano</p>

                <p className="username">
                  Meu cliente ja entrou em contato, podemos entrar em um acordo?
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="comentar">
              <ion-icon
                name="happy-outline"
                className="icones-menu mouse-link"
              ></ion-icon>
              <input
                type="text"
                placeholder="Digite aqui o seu comentario..."
              />
              <button type="submit">Publicar</button>
            </div>
          </div>
    
        </div>


        <div className="post border-padrao">
          <div className="cabecalho-post">
            <img
              src= {CoachingReverso}
              className="postuser-imagens mouse-link"
              alt=""
            />
            <p className="username espacador-menu mouse-link">NãoéOlele</p>
            <div className="icon-post">
              <ion-icon
                name="ellipsis-horizontal-outline"
                className="mouse-link"
              ></ion-icon>
            </div>
          </div>
    

          <img src={Hornetera} alt="" className="imagem-postada" />
          <div className="icones-post">
            <ion-icon
              name="heart-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="chatbubble-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <div className="icon-post icones-menu mouse-link">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="comentarios-post">
            <img
              src={MataNoia}
              className="postuser-comentarios mouse-link"
              alt=""
            />
            <p className="username">Curtido por</p>
            <p className="negrito mouse-link">Henrique.policiasp</p>
            <p className="username">e</p>
            <p className="negrito mouse-link">outras 914 pessoas</p>
          </div>

    
          <div className="interacao-comentarios">
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src= {Academia}
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">MariaClara.KAT</p>

                <p className="username">
                  Nossa Leonardo, que linda moto adorei! 
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src={AntiSocialMemes}
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">NãoSouoCidnei</p>

                <p className="username">Po, muito maneiro a motoca, agora so marcar o racha...</p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src= {MataNoia}
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">Henrique</p>

                <p className="username">
                  Adorei a moto, seria bacana a gente ir pra curitiba #TrackDay
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="comentar">
              <ion-icon
                name="happy-outline"
                className="icones-menu mouse-link"
              ></ion-icon>
              <input
                type="text"
                placeholder="Digite aqui o seu comentario..."
              />
              <button type="submit">Publicar</button>
            </div>
          </div>
    
        </div>


        <div className="post border-padrao">
          <div className="cabecalho-post">
            <img
              src={AntiSocialMemes}
              className="postuser-imagens mouse-link"
              alt=""
            />
            <p className="username espacador-menu mouse-link">NãoSouoCidnei</p>
            <div className="icon-post">
              <ion-icon
                name="ellipsis-horizontal-outline"
                className="mouse-link"
              ></ion-icon>
            </div>
          </div>
    

          <img src={Tomarrolandi} alt="" className="imagem-postada" />
          <div className="icones-post">
            <ion-icon
              name="heart-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="chatbubble-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <div className="icon-post icones-menu mouse-link">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="comentarios-post">
            <img
              src={MacacoMotorista}
              className="postuser-comentarios mouse-link"
              alt=""
            />
            <p className="username">Curtido por</p>
            <p className="negrito mouse-link">Sophia676_</p>
            <p className="username">e</p>
            <p className="negrito mouse-link">outras 539 pessoas</p>
          </div>

    
          <div className="interacao-comentarios">
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src={ Mulher1 }
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">Filomena.Dev</p>

                <p className="username">
                  Adorei essa festa Ciderson, eu sei que vc não é o Cydnei...
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src="https://pbs.twimg.com/media/E2w-TTnXIAMaBrj.jpg"
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">Maicum Douglas</p>

                <p className="username">
                  Rapaz nesse role eu vi ate dinossauro! Tira ele da coleira
                  MAno
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    

            <div className="comentar">
              <ion-icon
                name="happy-outline"
                className="icones-menu mouse-link"
              ></ion-icon>
              <input
                type="text"
                placeholder="Digite aqui o seu comentario..."
              />
              <button type="submit">Publicar</button>
            </div>
          </div>
    
        </div>


        <div className="post border-padrao">
          <div className="cabecalho-post">
            <img
              src={Academia}
              className="postuser-imagens mouse-link"
              alt=""
            />
            <p className="username espacador-menu mouse-link">MariaClara.KAT</p>
            <div className="icon-post">
              <ion-icon
                name="ellipsis-horizontal-outline"
                className="mouse-link"
              ></ion-icon>
            </div>
          </div>
    

          <img src={Academia} alt="" className="imagem-postada" />
          <div className="icones-post">
            <ion-icon
              name="heart-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="chatbubble-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              className="icones-menu mouse-link espacador-menor"
            ></ion-icon>
            <div className="icon-post icones-menu mouse-link">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="comentarios-post">
            <img
              src={ Academia}
              className="postuser-comentarios mouse-link"
              alt=""
            />
            <p className="username">Curtido por</p>
            <p className="negrito mouse-link">NãoSouoCidnei</p>
            <p className="username">e</p>
            <p className="negrito mouse-link">outras 59 pessoas</p>
          </div>

    
          <div className="interacao-comentarios">
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src= {CachorroCaramelo}
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">MarioFernando</p>

                <p className="username">
                  Meu nome é super incrivel, e na foto é meu DOG. #ReidasCachorra.
                </p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    
            <div className="user-comments">
              <div className="comentario flex-center">
                <img
                  src="https://pbs.twimg.com/media/E2w-TTnXIAMaBrj.jpg"
                  className="postuser-comentarios mouse-link"
                  alt=""
                />
                <p className="username negrito mouse-link">MuziMaromba</p>

                <p className="username">Ai sim, ficar grande caraiii</p>
              </div>

              <div className="icon-comentario">
                <ion-icon
                  name="heart-outline"
                  className="icones-menu mouse-link espacador-menor"
                ></ion-icon>
              </div>
            </div>
    

            <div className="comentar">
              <ion-icon
                name="happy-outline"
                className="icones-menu mouse-link"
              ></ion-icon>
              <input
                type="text"
                placeholder="Digite aqui o seu comentario..."
              />
              <button type="submit">Publicar</button>
            </div>
          </div>
    
        </div>


        <div className="espacamento-menu-mobile">.</div>
      </div>
    );



}