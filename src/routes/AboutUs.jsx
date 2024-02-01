import AboutContact from "../components/aboutUs/AboutContact"
import AboutServices from "../components/aboutUs/AboutServices"
import AboutSplashMain from "../components/aboutUs/AboutSplashMain"
import AboutTeamGrid from "../components/aboutUs/AboutTeamGrid"

export default function AboutUs() {
    return (
        <div className="AboutUs">
            <AboutSplashMain />
            <AboutTeamGrid />
            <AboutServices />
            <AboutContact />
        </div>
    )
}