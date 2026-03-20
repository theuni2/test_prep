import React from 'react'
import AcademiXNavbar from "../component/navigation";
import Footer from "../component/footer";
import OlympiadHero from "../programs/olympiad/hero"
import OlympiadGrid from "../programs/olympiad/olympiadgrid"
import OlympiadProcess from "../programs/olympiad/process";
import Testimonials from '../programs/olympiad/testimonial';
import OlympiadInfo from '../programs/olympiad/why';
import OlympiadFre from '../programs/olympiad/fre';

export default function Page() {
  return (
    <div>
      <AcademiXNavbar />
      <OlympiadHero />
      <OlympiadInfo/>
      <OlympiadGrid/>
      <OlympiadProcess/>
      <Testimonials/>
      <OlympiadFre/>
      <Footer />

    </div>
  )
}
