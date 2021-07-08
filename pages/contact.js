import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import PollsSection from '../components/ContactPage/PollsSection/PollsSection'
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

        <div className='container-fluid' style={{textAlign : 'left', padding : '90px 20px', margin : '0px', backgroundImage: 'url(/static/images/getInv.png)', backgroundSize : 'cover'}}>

        <h2>GET INVOLVED</h2>
        <ol style={{fontSize: '15px'}}>
          <li>Register to Vote before it is too late</li>
          <li>Participate in our national opinion polls</li>
          <li>Support my candidacy for the PDP Presidential Primaries</li>
          <li>Support my candidacy for the General Presidential Elections</li>
          <li>Believe me, we will govern together because the curtain separating government from the people will be destroyed permanently. </li>
        </ol>


        </div>

        <div className='container'>
            <div className='col-md-6' style={{marginTop : '50px'}}>
              <h3 style={{textAlign : 'left', color : '#09123A', fontWeight : 'bolder'}}>LET US BUILD A NEW NIGERIA TOGETHER</h3>
                <p style={{textAlign : 'left', marginTop : '60px'}}>
                    <span style={{color : '#DC3545', fontWeight : 'bold', fontSize : '40px'}}>PHONE</span><br/><small>&nbsp;&nbsp;&nbsp; 080-xxx-xxx-xx </small><br/>
                    <span style={{color : '#DC3545', fontWeight : 'bold', fontSize : '40px'}}>EMAIL</span><br/><small>&nbsp;&nbsp;&nbsp;info@ktt4president.org</small><br/>
                    <span style={{color : '#DC3545', fontWeight : 'bold', marginTop : '20px', fontSize : '30px'}}>CAMPAIGN HEADQUARTERS</span><br/><small>&nbsp;&nbsp;&nbsp; 40, Jimmy Carter Street,</small><br/>
                    <small>&nbsp;&nbsp;&nbsp; Asokoro, Abuja,</small><br/>
                    <small>&nbsp;&nbsp;&nbsp; Nigeria.</small><br/>
                </p>
            </div>
            <div className='col-md-6'>
                <ContactForm />
            </div>
        </div>


        <br/><br/>
        <style jsx>{`
          ol {
            counter-reset: list;
            list-style: none;
          }

          li {
            counter-increment: list;
            margin-bottom: 10px;
          }

          li::before {
            content: counter(list, decimal-leading-zero);
            background: #2b4353;
            font-family: Arial, sans-serif;
            color: #fff;
            font-size: 13px;
            text-align: center;
            border-radius: 50%;
            width: 2.2em;
            height: 2.2em;
            line-height: 2.3em;
            display: inline-block;
            margin-right: 1em;
          }
        `}
        </style>
     </div>
    )
  }


}

export default withLayout(ContactImage)
