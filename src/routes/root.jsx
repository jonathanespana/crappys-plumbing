
import LogoAppBar from '../components/LogoAppBar';
import { Outlet } from 'react-router-dom';

export default function Root() {

    return (
        <div >
            <LogoAppBar />
            <Outlet />
        </div>
    );
}