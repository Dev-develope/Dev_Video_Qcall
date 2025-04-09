import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RetailFeatures from "src/components/common/RetailFeatures";
import SingleButton from "src/components/common/SingleButton";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF, HumanLikeVoice } from "src/constants/ai_contact_center";
import { enterPriseTeamsData, legalFeaturesData, legalHerocardData, legalHeroData, reatilSafety, retailFeaturesData, retailHerocardData, retailHeroData, retailTeamsData } from "src/constants/SolutionData";
import waveImg from "../../../public/images/2Product-ContactCentre/Wave.png"
import Pricing from "src/components/common/Pricing";
import enterPrise1 from "../../../public/images/8EnterpriseSolution/enterPrise1.png"
import enterPrise2 from "../../../public/images/8EnterpriseSolution/enterPrise2.png"
import enterPrise3 from "../../../public/images/8EnterpriseSolution/enterPrise3.png"
import ContactCenterEcosystem from "src/components/common/ContactCenterEcosystem";
import HeroBackgroundImage from "src/components/common/HeroBackgroundImage";
import TermsAndConditions from "src/components/common/TermsAndConditions";
export default function page() {
    const policyData = { para: "Let's review the terms you'll agree to.", heading: "Privacy Policy" }
    return (<>
        <HeroBackgroundImage data={policyData}/>
        <TermsAndConditions />
        <Exploring />
    </>)
}