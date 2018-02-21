import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import HeroSection from '../components/HomePage/HeroSection/HeroSection'
import EmpowermentZoneSection from '../components/HomePage/EmpowermentZoneSection/EmpowermentZoneSection'
import KttTelevision from '../components/HomePage/KttTelevision/KttTelevision'
import ChoiceContent from '../components/HomePage/ChoiceContent/ChoiceContent'
import GetInvolvedSection from '../components/HomePage/GetInvolvedSection/GetInvolvedSection'
import EventsSection from '../components/HomePage/EventsSection/EventsSection'
import Endorsements from '../components/HomePage/Endorsements/Endorsements'

const firstTitle = 'Caption Text Here'
const captionContent = 'Porem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum'

class HomePage extends Component {
  render(){
    return (
      <div>
        <HeroSection />
        <ChoiceContent title={firstTitle} content={captionContent}/>
        <EmpowermentZoneSection />
        <KttTelevision />
        <ChoiceContent />
        <GetInvolvedSection />
        {/*<EventsSection />
        <Endorsements />*/}
        <ChoiceContent />
      </div>
    )
  }
}

export default withLayout(HomePage, {activePage: 'home'})
