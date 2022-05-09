import '../src/css/estilos.css';
import NavMenu from './NavMenu';
import SideBar from './SideBar';
import Posts from './Posts';
import MenuMobile from './MenuMobile';

export default function App(){

    return(
        <div className="flex-center">
            <NavMenu />
            <div className="container">
                 <Posts />
                 <SideBar />
            </div>
            <MenuMobile />
          
        </div>
    );

}