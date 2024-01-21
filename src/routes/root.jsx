
import SearchAppBar from '../components/AppBar';
import { Outlet } from 'react-router-dom';

export default function Root() {

    return (
        <div >
            <SearchAppBar />
            <Outlet />
        </div>
    );
}