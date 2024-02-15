import PricingAccordion from "../components/pricing/PricingAccordion";
import PricingContact from "../components/pricing/PricingContact";
import PricingSplash from "../components/pricing/PricingSplash";

export default function Pricing() {
    return (
        <div className="Pricing">
            <PricingSplash />
            <PricingAccordion />
            <PricingContact />
        </div>
    )
}