import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import HeroSection from '../components/HomePage/HeroSection/HeroSection'
import EmpowermentZoneSection from '../components/HomePage/EmpowermentZoneSection/EmpowermentZoneSection'
import TurakiMessage from '../components/HomePage/TurakiMessage/TurakiMessage'
import ChoiceContent from '../components/HomePage/ChoiceContent/ChoiceContent'
import GetInvolvedSection from '../components/HomePage/GetInvolvedSection/GetInvolvedSection'
<<<<<<< HEAD
//import EventsSection from '../components/HomePage/EventsSection/EventsSection'
//import Endorsements from '../components/HomePage/Endorsements/Endorsements'
import PollsSection from '../components/HomePage/PollsSection/PollsSection'
=======
import EventsSection from '../components/HomePage/EventsSection/EventsSection'
import Endorsements from '../components/HomePage/Endorsements/Endorsements'
import PollResult from '../components/HomePage/PollsSection/PollResult'
>>>>>>> 2b6d5cb5330a9ad78f74372d22e4c9f03f8b59e0

const firstTitle = 'Caption Text Here'
const captionContent = 'Porem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum'

class HomePage extends Component {
  render(){
    return (
      <div>
        <Head>
          <title>KTT4President</title>
          <link href="https://fonts.googleapis.com/css?family=Mrs+Saint+Delafield" rel="stylesheet"/>
        </Head>
        <HeroSection />
        <ChoiceContent title={firstTitle} content={captionContent}/>
        <EmpowermentZoneSection />
        <TurakiMessage />
        <PollResult />
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
