import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import HeroSection from '../components/HomePage/HeroSection/HeroSection'
import EmpowermentZoneSection from '../components/HomePage/EmpowermentZoneSection/EmpowermentZoneSection'
import TurakiMessage from '../components/HomePage/TurakiMessage/TurakiMessage'
import ChoiceContent from '../components/HomePage/ChoiceContent/ChoiceContent'
import TopChoice from '../components/HomePage/ChoiceContent/TopChoice'
import GetInvolvedSection from '../components/HomePage/GetInvolvedSection/GetInvolvedSection'
//import EventsSection from '../components/HomePage/EventsSection/EventsSection'
//import Endorsements from '../components/HomePage/Endorsements/Endorsements'
//import PollsSection from '../components/HomePage/PollsSection/PollsSection'
import EventsSection from '../components/HomePage/EventsSection/EventsSection'
import Endorsements from '../components/HomePage/Endorsements/Endorsements'
import PollResult from '../components/HomePage/PollsSection/PollResult'

const firstTitle = 'The Clock is Ticking'
const captionContent = ['Support KABIRU TANIMU TURAKI: The ',
 <span style={{color : 'red', fontWeight : 'bolder'}}><u>#1</u></span>,
 ' contender for the PDP presidential nomination and presidential candidate for the 2019 presidential elections, ready to lead the country into an era of prosperity for all NIgerians. With your support, we will eradicate broken promises, political lies, hunger, poverty, wastage, incompetence, fraud, nepotism, terrorism, inequality and social injustice. Your support will lead to rebirth and total reconstruction of Nigeria. Our vision is strong, durable and achievable. This time around, its' ,
 <span style={{color : 'red', fontWeight : 'bolder'}}> YOU FIRST</span>,
'.']

const secondTitle = [
  <small>NIGERIA NEEDS</small>,
  <br/>,
  <span style={{fontSize: '42px'}}>BOLD, FRESH & INTELLECTUAL LEADERSHIP</span>
]

const addClass = 'addClass'

const thirdTitle = ['WORLD CLASS INFRASTRUCTURES']

class HomePage extends Component {
  render(){
    return (
      <div>
        <Head>
          <title>KTT4President</title>
          <link href="https://fonts.googleapis.com/css?family=Mrs+Saint+Delafield" rel="stylesheet"/>
        </Head>
        <HeroSection />
        <TopChoice title={firstTitle} content={captionContent}/>
        <EmpowermentZoneSection />
        <TurakiMessage />
        <PollResult />
        <ChoiceContent addClass={addClass} title={secondTitle} />
        <GetInvolvedSection />
        {/*<EventsSection />
        <Endorsements />*/}
        <ChoiceContent addClass={addClass}  title={thirdTitle} />
      </div>
    )
  }
}

export default withLayout(HomePage, {activePage: 'home'})
