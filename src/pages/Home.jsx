import ServicesGrid from '../components/ServicesGrid';
import HomeSplash from '../components/HomeSplash';
import HomeMainContent from '../components/HomeMainContent';
import ServicesHighlight from '../components/ServicesHighlight';

export default function Home() {
    return (
        <div className="home">
            <HomeSplash />
            <ServicesGrid />
            <HomeMainContent />
            <ServicesHighlight />
        </div>
    )
}