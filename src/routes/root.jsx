
import LogoAppBar from '../components/root/LogoAppBar';
import Footer from '../components/root/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {

    return (
        <div >
            <LogoAppBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}