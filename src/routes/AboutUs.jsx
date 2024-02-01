import AboutServices from "../components/aboutUs/AboutServices"
import AboutSplashMain from "../components/aboutUs/AboutSplashMain"
import AboutTeamGrid from "../components/aboutUs/AboutTeamGrid"

export default function AboutUs() {
    return (
        <div className="AboutUs">
            <AboutSplashMain />
            <AboutTeamGrid />
            <AboutServices />
        </div>
    )
}