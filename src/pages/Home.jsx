import ServicesGrid from '../components/ServicesGrid';
import HomeSplash from '../components/HomeSplash';
import HomeMainContent from '../components/HomeMainContent';

export default function Home() {
    return (
        <div className="home">
            <HomeSplash />
            <ServicesGrid />
            <HomeMainContent />
        </div>
    )
}