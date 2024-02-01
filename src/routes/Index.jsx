import ServicesGrid from '../components/home/ServicesGrid';
import HomeSplash from '../components/home/HomeSplash';
import HomeMainContent from '../components/home/HomeMainContent';
import ServicesHighlight from '../components/home/ServicesHighlight';
import HomeContact from '../components/home/HomeContact';
import HomeSplashGrid from '../components/home/HomeSplashGrid';
import HomeReviews from '../components/home/HomeReviews';
import HomeScheduler from '../components/home/HomeScheduler';

export default function Home() {
    return (
        <div className="home">
            <HomeSplash />
            <ServicesGrid />
            <HomeMainContent />
            <ServicesHighlight />
            <HomeContact />
            <HomeSplashGrid />
            <HomeReviews />
            <HomeScheduler />
        </div>
    )
}