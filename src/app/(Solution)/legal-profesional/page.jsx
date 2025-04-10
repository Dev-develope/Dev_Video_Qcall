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
import {leaglProfessionalDataA, leaglProfessionalDataB, leaglProfessionalDataC} from "src/constants/ai_contact_center";
import { leaglProfeData, legalFeaturesData, legalHerocardData, legalHeroData, reatilSafety } from "src/constants/SolutionData";
import securityImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/security.png"
import boostproductImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/boostproduct.png"
import trackclientImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/trackclient.png"


export default function page() {
    return (<>
        <Hero data={legalHeroData[0]} herocardData={legalHerocardData}>
            <SingleButton title="Get a Demo Today!" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={leaglProfeData} />
        <CommonCard cardDatas={leaglProfessionalDataA} img={trackclientImg}/>
        <CommonCardB cardDatas={leaglProfessionalDataB} img={boostproductImg}/>
        <CommonCard cardDatas={leaglProfessionalDataC} img={securityImg}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" />
        </div>
        <RetailFeatures data={legalFeaturesData} />
        <Exploring />
    </>)
}