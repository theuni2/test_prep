import React from 'react'
import AcademiXNavbar from "../component/navigation";
import Footer from '../component/footer';
import APCalculusPage from "../programs/ap/home"
import Whats from "../programs/ap/whats";
import Why from '../programs/ap/why';
import FinalSection from '../programs/ap/final';

export default function Page() {
  return (
    <div>

        <AcademiXNavbar/>
<APCalculusPage/>
<Whats/>
<Why/>
<FinalSection/>

        <Footer/>
        
    </div>
  )
}
