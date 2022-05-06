import './css/estilos.css';
import NavMenu from './NavMenu';
import SideBar from './SideBar';
import Posts from './Posts';

export default function App(){

    return(
        <div>
            <NavMenu />
            <SideBar />
            <div className='container'>
                <Posts />
            </div>
          
        </div>
    );

}