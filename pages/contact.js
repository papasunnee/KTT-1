import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import PollsSection from '../components/HomePage/PollsSection/PollsSection'
import ContactForm from '../components/ContactPage/ContactForm'
import HeroSection from '../components/GalleryPage/HeroSection/HeroSection'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'Contact', active: true},
]

const BanImage = (props) => {
  return (
    <div className="container-fluid" style={{width : '100%', height : '600px', backgroundImage : 'url(../static/images/contact.png)', backgroundSize : 'cover'}}>
      <h2 style={{marginTop : '180px' , color : 'white' }}>&nbsp;&nbsp;</h2>
    </div>
  )
}

class ContactImage extends Component {
  render(){
    return (
      <div>
        <Head>
            <title>KTT4President | Contact KTT</title>
        </Head>
        {/*<PageTitle breadcrumbs={breadcrumbs} title={" "} isMediaPage/>*/}
        <BanImage />
        <PollsSection />
        <div className='container'>
            <div className='col-md-6' style={{marginTop : '50px'}}>
            <h3 style={{textAlign : 'left', color : '#09123A', fontWeight : 'bolder'}}>LET US BUILD A NEW NIGERIA TOGETHER</h3>
                <p style={{textAlign : 'left', marginTop : '60px'}}>
                    <span style={{color : '#DC3545', fontWeight : 'bold', fontSize : '40px'}}>PHONE</span><br/><small>&nbsp;&nbsp;&nbsp; 080-xxx-xxx-xx </small><br/>
                    <span style={{color : '#DC3545', fontWeight : 'bold', fontSize : '40px'}}>EMAIL</span><br/><small>&nbsp;&nbsp;&nbsp;info@ktt4president.org</small><br/>
                    <span style={{color : '#DC3545', fontWeight : 'bold', marginTop : '20px', fontSize : '30px'}}>CAMPAIGN HEADQUARTERS</span><br/><small>&nbsp;&nbsp;&nbsp; xxx xxx xxx xxx xxx xxx</small><br/>
                    <small>&nbsp;&nbsp;&nbsp; xxx xxx xxx xxx xxx xxx</small><br/>
                    <small>&nbsp;&nbsp;&nbsp; xxx xxx xxx xxx xxx xxx</small><br/>
                </p>
            </div>

            <div className='col-md-6'>
                <ContactForm />
            </div>
        </div>
        <br/><br/>
     </div>
    )
  }

  
}

export default withLayout(ContactImage)
