import './css/estilos.css';
import NavMenu from './NavMenu';
import SideBar from './SideBar';
import Posts from './Posts';

export default function App(){

    return(
        <div>
            <NavMenu />
            <div className='container'>
                 <Posts />
                 <SideBar />
            </div>
          
        </div>
    );

}