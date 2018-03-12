import {Component} from 'react'

export default class FactSlider extends Component {

    render(){
        return(
            <div>
                    <div className="row-fluid" style={{marginLeft : '-15px'}}>
                        <div id="my-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="container-fluid">
                                        <div className="row spacer-md">
                                            <div className="col-sm-12 col-md-5 col-md-offset-1">
                                                <div className="animated fadeInLeftBig slide-delay-1">
                                                </div>
                                                <h3 className="animated fadeInLeftBig slide-delay-2 YellowText">
                                                    Nigeria is a resource rich country with a GDP of 31 trillion naira but 75% of its population living in abject poverty
                                                </h3>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="animated fadeInRightBig text-center">
                                                    <img src="/static/images/dice2.jpg" alt="" className="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="container-fluid">
                                        <div className="row spacer-md">
                                            <div className="col-sm-12 col-md-5 col-md-offset-1">
                                                <img className="img-responsive rollIn" src="/static/images/dice4.png" alt="" />
                                            </div>
                                            <div className="col-sm-12 col-md-6">

                                                <div className="content-right animated rotateInDownRight slide-delay-1">
                                                </div>

                                                <h3 className="animated fadeInUpBig slide-delay-2 YellowText">
                                                    Nigeria is ranked among the most corrupt countries in the world, getting worse between 2016 to date
                                                </h3>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="container">

                                        <div className="row spacer-md">
                                            <div className="col-sm-12 col-md-5 col-md-offset-1">

                                                
                                                <div className="content-left animated bounceInLeft slide-delay-1">
                                                </div>

                                                <h3 className="animated fadeInUpBig slide-delay-2 YellowText">
                                                    NNPC refuses to release details of subsidy payments in the last three years. WHY & WHAT are they hiding ?
                                                </h3>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <img className="img-responsive animated bounceInDown" src="/static/images/dice3.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="container-fluid">
                                        <div className="row spacer-md">
                                            <div className="col-sm-12 col-md-5 col-md-offset-1">
                                                <div className="animated fadeInLeftBig slide-delay-1">
                                                </div>
                                                <h3 className="animated fadeInLeftBig slide-delay-2 YellowText">
                                                    Except the University of Ibadan, no Nigerian university ranks among the first 1000 in the world in terms of quality.
                                                </h3>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="animated fadeInRightBig text-center">
                                                    <img src="/static/images/dice4.png" alt="" className="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="container-fluid">
                                        <div className="row spacer-md">
                                            <div className="col-sm-12 col-md-5 col-md-offset-1">
                                                <img className="img-responsive animated rollIn" src="/static/images/dice3.png" alt="" />
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="content-right animated rotateInDownRight slide-delay-1">
                                                </div>
                                                <h3 className="animated fadeInUpBig slide-delay-2 YellowText">
                                                    Nigeria has no comprehensive record of unemployed. How did the current government provide jobs for those they did not even know.
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="container">
                                        <div className="row spacer-md">
                                            <div className="col-sm-12 col-md-5 col-md-offset-1">
                                                <div className="content-left animated bounceInLeft slide-delay-1">
                                                </div>
                                                <h3 className="animated fadeInUpBig slide-delay-2 YellowText">
                                                    Unemployment is worst in the history of Nigeria. Youth unemployment : 35% , underemployment : 45% 
                                                </h3>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <img className="img-responsive animated bounceInDown" src="/static/images/dice3.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="container">

                                        <div className="row spacer-md">
                                            <div className="col-sm-12 col-md-5 col-md-offset-1">

                                                
                                                <div className="content-left animated bounceInLeft slide-delay-1">
                                                </div>

                                                <h3 className="animated fadeInUpBig slide-delay-2 YellowText">
                                                    Economic growth can produce forty million Jobs.
                                                </h3>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <img className="img-responsive animated bounceInDown" src="/static/images/dice3.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        h1, h2, h3, h4, h5, h6 {
                            font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
                            font-weight: 700;
                        }
                        
                        h3{
                            font-size : 38px ;
                            line-height : 40px ;
                            text-align : left ;
                            margin-bottom: 20px;
                        }

                        .carousel-inner
                        {
                            background-color:black;
                            height : 300px ;
                        }


                        .WhiteText
                        {
                            color:white;
                        }

                        .YellowText
                        {
                            color:#FFDF00;
                        }


                        .spacer-md
                        {
                            padding-top:50px;
                            padding-bottom:50px;  
                        }

                        .slide-delay-1 {
                            
                                -webkit-animation-delay: 0.2s;
                                -moz-animation-delay: 0.2s;
                                -o-animation-delay: 0.2s;
                                -ms-animation-delay: 0.2s;

                        }

                        .slide-delay-2 {

                                -webkit-animation-delay: 0.5s;
                                -moz-animation-delay: 0.5s;
                                -o-animation-delay: 0.5s;
                                -ms-animation-delay: 0.5s;
                            
                        }
                        .carousel-inner > .item {
                        display: none;
                        position: relative;
                        -webkit-transition: 0.6s ease-in-out left;
                        transition: 0.6s ease-in-out left;
                        }
                        .carousel-inner > .item > img,
                        .carousel-inner > .item > a > img {
                        line-height: 1;
                        }
                        .carousel-inner > .active,
                        .carousel-inner > .next,
                        .carousel-inner > .prev {
                        display: block;
                        }
                        .carousel-inner > .active {
                        left: 0;
                        }
                        .carousel-inner > .next,
                        .carousel-inner > .prev {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        }
                        .carousel-inner > .next {
                        left: 100%;
                        }
                        .carousel-inner > .prev {
                        left: -100%;
                        }
                        .carousel-inner > .next.left,
                        .carousel-inner > .prev.right {
                        left: 0;
                        }
                        .carousel-inner > .active.left {
                        left: -100%;
                        }
                        .carousel-inner > .active.right {
                        left: 100%;
                        }
                        .carousel-control {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        width: 15%;
                        opacity: 0.5;
                        filter: alpha(opacity=50);
                        font-size: 20px;
                        color: #ffffff;
                        text-align: center;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                        }
                        .carousel-control.left 
                        {
                            


                        background: #1e5799;
                        background: -moz-linear-gradient(top,  #1e5799 0%, #207cca 23%, #207cca 24%, #2989d8 32%, #7db9e8 100%); /* FF3.6+ */
                        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(23%,#207cca), color-stop(24%,#207cca), color-stop(32%,#2989d8), color-stop(100%,#7db9e8)); /* Chrome,Safari4+ */
                        background: -webkit-linear-gradient(top,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* Chrome10+,Safari5.1+ */
                        background: -o-linear-gradient(top,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* Opera 11.10+ */
                        background: -ms-linear-gradient(top,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* IE10+ */
                        background: linear-gradient(to bottom,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* W3C */
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */


                        }


                        .carousel-control.right {
                        left: auto;
                        right: 0;
                        
                        
                        background: #1e5799; /* Old browsers */
                        background: -moz-linear-gradient(top,  #1e5799 0%, #207cca 23%, #207cca 24%, #2989d8 32%, #7db9e8 100%); /* FF3.6+ */
                        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(23%,#207cca), color-stop(24%,#207cca), color-stop(32%,#2989d8), color-stop(100%,#7db9e8)); /* Chrome,Safari4+ */
                        background: -webkit-linear-gradient(top,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* Chrome10+,Safari5.1+ */
                        background: -o-linear-gradient(top,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* Opera 11.10+ */
                        background: -ms-linear-gradient(top,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* IE10+ */
                        background: linear-gradient(to bottom,  #1e5799 0%,#207cca 23%,#207cca 24%,#2989d8 32%,#7db9e8 100%); /* W3C */
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */



                        }




                        .carousel-control:hover,
                        .carousel-control:focus {
                        outline: none;
                        color: #ffffff;
                        text-decoration: none;
                        opacity: 0.9;
                        filter: alpha(opacity=90);
                        }
                        .carousel-control .icon-prev,
                        .carousel-control .icon-next,
                        .carousel-control .glyphicon-chevron-left,
                        .carousel-control .glyphicon-chevron-right {
                        position: absolute;
                        top: 50%;
                        z-index: 5;
                        display: inline-block;
                        }
                        .carousel-control .icon-prev,
                        .carousel-control .glyphicon-chevron-left {
                        left: 50%;
                        }
                        .carousel-control .icon-next,
                        .carousel-control .glyphicon-chevron-right {
                        right: 50%;
                        }
                        .carousel-control .icon-prev,
                        .carousel-control .icon-next {
                        width: 20px;
                        height: 20px;
                        margin-top: -10px;
                        margin-left: -10px;
                        font-family: serif;
                        }
                        .carousel-control .icon-prev:before {
                        
                        }
                        .carousel-control .icon-next:before {
                        
                        }
                        .carousel-indicators {
                        position: absolute;
                        bottom: 10px;
                        left: 50%;
                        z-index: 15;
                        width: 60%;
                        margin-left: -30%;
                        padding-left: 0;
                        list-style: none;
                        text-align: center;
                        }
                        .carousel-indicators li {
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        margin: 1px;
                        text-indent: -999px;
                        border: 1px solid #ffffff;
                        border-radius: 10px;
                        cursor: pointer;
                        background-color: #000 \9;
                        background-color: rgba(0, 0, 0, 0);
                        }
                        .carousel-indicators .active {
                        margin: 0;
                        width: 12px;
                        height: 12px;
                        background-color: #ffffff;
                        }
                        .carousel-caption {
                        position: absolute;
                        left: 15%;
                        right: 15%;
                        bottom: 20px;
                        z-index: 10;
                        padding-top: 20px;
                        padding-bottom: 20px;
                        color: #ffffff;
                        text-align: center;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
                        }
                        .carousel-caption .btn {
                        text-shadow: none;
                        }
                        @media screen and (min-width: 768px) {
                        .carousel-control .glyphicon-chevron-left,
                        .carousel-control .glyphicon-chevron-right,
                        .carousel-control .icon-prev,
                        .carousel-control .icon-next {
                            width: 30px;
                            height: 30px;
                            margin-top: -15px;
                            margin-left: -15px;
                            font-size: 30px;
                        }
                        .carousel-caption {
                            left: 20%;
                            right: 20%;
                            padding-bottom: 30px;
                        }
                        .carousel-indicators {
                            bottom: 20px;
                        }
                        }


                    `}
                    </style>
            </div>
        )
    }
}