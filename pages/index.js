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
import EventsSection from '../components/HomePage/EventsSection/EventsSection'
import Endorsements from '../components/HomePage/Endorsements/Endorsements'
import PollResult from '../components/ContactPage/PollsSection/PollResult'

const firstTitle = 'The Clock is Ticking'
const captionContent = ['Support KABIRU TANIMU TURAKI: The ',
 <span style={{color : 'red', fontWeight : 'bolder'}}><u>#1</u></span>,
 ' contender for the PDP presidential nomination and presidential candidate for the 2019 presidential elections, ready to lead the country into an era of ' ,
 <span style={{color : 'red', fontWeight : 'bold'}}>"Prosperity For All Nigerians"</span>,
 '. With your support, we will eradicate broken promises, political lies, hunger, poverty, wastage, incompetence, fraud, nepotism, terrorism, inequality and social injustice. Your support will lead to rebirth and total reconstruction of Nigeria. Our vision is strong, durable and achievable. This time around, its' ,
 <span style={{color : 'red', fontWeight : 'bolder'}}> YOU FIRST</span>,
'.']

const secondTitle = [
  <small>NIGERIA NEEDS</small>,
  <br/>,
  <span style={{fontSize: '42px'}}>FRESH, BOLD & INTELLECTUAL LEADERSHIP</span>
]

const secondContent = 'Regardless of which political affiliation we belong, most Nigerians believe our leadership is corrupt, divisive, inept and unintelligent. The agendas and strategies are old, tired and unproductive and cannot meet the 21st century challenges. If elected, we will install a leadership made of patriotic Nigerians with proven talents and abilities regardless of age, religion, tribe or party affiliation. We need leadership who truly believes that our diversity is a source of national strength and thus embraces it when it comes to appointments, policies and implementations.'

const addClass = 'addClass'

const thirdTitle = [<small>NIGERIA NEEDS</small>,
<br/>,
<span style={{fontSize: '42px'}}>WORLD CLASS INFRASTRUCTURES</span>]

const thirdContent = 'Our hospitals, Schools, roads, bridges, railways, electricity, water supply, security, are a serious disgrace and embarrassment. Promises to rebuild and attend to these critical sectors have been ignored while trillion have been wasted or looted. Under my leadership, we will set our priorities right. It’s YOU FIRST. There will be no need to travel overseas to experience what it means to enjoy good infrastructures. Nigeria will take a giant leap to construct and maintain critical infrastructures. Every Nigerian deserve good infrastructures. '

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
        <ChoiceContent addClass={addClass} title={secondTitle} content={secondContent} />
        <GetInvolvedSection />
        {/*<EventsSection />
        <Endorsements />*/}
        <ChoiceContent addClass={addClass}  title={thirdTitle} content={thirdContent} />
      </div>
    )
  }
}

export default withLayout(HomePage, {activePage: 'home'})
