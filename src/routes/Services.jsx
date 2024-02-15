import ServicesSplash from "../components/services/ServicesSplash";
import ServicesExpects from "../components/services/ServicesExpects";
import ServicesSpecialties from "../components/services/ServicesSpecialties";
import ServicesArea from "../components/services/ServicesArea";
import ServicesContact from "../components/services/ServicesContact";

export default function Services() {

    return (
        <div className="Services">
            <ServicesSplash />
            <ServicesExpects />
            <ServicesSpecialties />
            <ServicesArea />
            <ServicesContact />
        </div>
    )
}