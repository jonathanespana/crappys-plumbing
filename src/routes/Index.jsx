import ServicesGrid from '../components/ServicesGrid';
import HomeSplash from '../components/HomeSplash';
import HomeMainContent from '../components/HomeMainContent';
import ServicesHighlight from '../components/ServicesHighlight';
import HomeContact from '../components/HomeContact';
import HomeSplashGrid from '../components/HomeSplashGrid';
import HomeReviews from '../components/HomeReviews';
import HomeScheduler from '../components/HomeScheduler';
import HomeFooter from '../components/HomeFooter';

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
            <HomeFooter />
        </div>
    )
}