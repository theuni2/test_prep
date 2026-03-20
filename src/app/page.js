import Image from "next/image";
import AcademiXNavbar from "./component/navigation";
import Hero from "./component/home/hero";
import Programs from "./component/home/programData";
import Tutors from "./component/home/mentor";
import HomeSuccessSection from "./component/home/success";
import WhyRequired from "./component/home/why";
import WhyUs from "./component/home/whyus";


import Footer from "./component/footer";
// import 


export default function Home() {
  return (
    <div className="">
      <AcademiXNavbar/>
      <Hero/>
      <WhyRequired/>
      <WhyUs/>
      <Programs/>
      <Tutors/>
      <HomeSuccessSection/>
      <Footer/>
      
    

  
    </div>
  );
}
