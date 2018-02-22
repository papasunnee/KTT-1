import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
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
        {/*<PageTitle breadcrumbs={breadcrumbs} title={" "} isMediaPage/>*/}
        <BanImage />
        <br/><br/>
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

                <div className="row input-container">
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input type="text" required/>
                            <label>Email</label> 
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input type="text" required/>
                            <label>Phone Number</label> 
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="btn-lrg submit-btn">Send Message</div>
                    </div>
            </div>
                




            </div>
        </div>
        <br/><br/>
        <style jsx>{`

        h1 {
            font-family : 'Poppins', sans-serif, 'arial';
            font-weight: 600;
            font-size: 72px;
            color: white;
            text-align: center;
        }

        h4 {
            font-family: 'Roboto', sans-serif, 'arial';
            font-weight: 400;
            font-size: 20px;
            color: #9b9b9b;
            line-height: 1.5;
        }

        input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
            font-size: 0.75em;
            color: #999;
            top: -5px;
            -webkit-transition: all 0.225s ease;
            transition: all 0.225s ease;
        }

        .styled-input {
            float: left;
            width: 293px;
            margin: 1rem 0;
            position: relative;
            border-radius: 4px;
        }

        @media only screen and (max-width: 768px){
            .styled-input {
                width:100%;
            }
        }

        .styled-input label {
            color: #999;
            padding: 1.3rem 30px 1rem 30px;
            position: absolute;
            top: 10px;
            left: 0;
            -webkit-transition: all 0.25s ease;
            transition: all 0.25s ease;
            pointer-events: none;
        }

        .styled-input.wide { 
            width: 650px;
            max-width: 100%;
        }

        input,
        textarea {
            padding: 30px;
            border: 0;
            width: 100%;
            font-size: 1rem;
            background-color: #09123A;
            color: white;
            border-radius: 4px;
        }

        input:focus,
        textarea:focus { outline: 0; }

        input:focus ~ span,
        textarea:focus ~ span {
            width: 100%;
            -webkit-transition: all 0.075s ease;
            transition: all 0.075s ease;
        }

        textarea {
            width: 100%;
            min-height: 15em;
        }

        .input-container {
            width: 650px;
            max-width: 100%;
            margin: 20px auto 25px auto;
        }

        .submit-btn {
            float: right;
            padding: 7px 35px;
            border-radius: 60px;
            display: inline-block;
            background-color: #4b8cfb;
            color: white;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
                    0 2px 10px 0 rgba(0,0,0,0.07);
            -webkit-transition: all 300ms ease;
            transition: all 300ms ease;
        }

        .submit-btn:hover {
            transform: translateY(1px);
            box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
                    0 1px 1px 0 rgba(0,0,0,0.09);
        }

        @media (max-width: 768px) {
            .submit-btn {
                width:100%;
                float: none;
                text-align:center;
            }
        }

        input[type=checkbox] + label {
        color: #ccc;
        font-style: italic;
        } 

        input[type=checkbox]:checked + label {
        color: #f00;
        font-style: normal;
        }
        
        `}</style>
      </div>
    )
  }

  
}

export default withLayout(ContactImage)
