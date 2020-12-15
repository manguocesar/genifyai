import React, {useState} from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//img
import genifyLogo from "../img/genifyLogo.png"
import imgOne from "../img/imgOne.png"
import Benefits from "../img/Benefits.png"
import Carousel from 'react-elastic-carousel';

//carousel
import slideOne from "../img/slideOne.jpg"
import slideTwo from "../img/slideTwo.png"
import slideThree from "../img/slideThree.png"
import slideFour from "../img/slideFour.png"

import Header from "../components/Header"

function LandingPage() {

    const [carousel, setCarousel] = useState([
        {id:1,title:slideOne},
        {id:2,title:slideTwo},
        {id:3,title:slideThree},
        {id:4,title:slideFour},])

    const Timeline = [
        {left:"Q3 2019: Company Launch", right:""},
        {left:"", right:"Q4 2019: Winner of 4Paradigm APEX AI"},
        {left:"Q1 2020: Beta Release of our Transaction Classifier",right:""},
        {left:"",right:"Q2 2020: Beta Release of our Banking Recommendation Engine"},
        {left:"Q3 2020: Winner of BSF Virtual Hackathon",right:""},
        {left:"",right:"Q3 2020: Winner of EGBank MINT Hackathon"},
        {left:"Q3 2020: Winner of GIW / FrenchTech",right:""},
        {left:"",right:"Q3 2020: Participation in MINT Incubation Program in Eygpt"},
        {left:"Q4 2020: Beta Release of EZLoan Platform",right:""}
    ]

    return (
        <div>
            <Header/>

<div class="flex flex-col items-center bg-purple-500">
<div class="flex flex-row "><img alt="" src={genifyLogo} class="h-20"/></div> 
    <div><h5> Artificial Intelligence. Solutions. Banking. Customer Experience</h5> </div>
    <div><h5> Genify your business today</h5></div>
    <div><p> Personalized customer experience through machine learning</p></div>
    <div><p> Genify engineers AI solutions harnessing financial data to sublimate user experience</p></div>
    </div>

    <div class="flex flex-col items-center bg-red-600">
    <div><h3> Let's talk product</h3></div>
        <div class="flex justify-between">
            <div class="flex flex-row items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div>
                <p> Transaction Categorizer</p>
                <p class="w-40 text-center">
                    
                    
                    Enrich your transaction data to gain insights into your users and build downstream value-adding AI solutions


</p>
            </div>
                </div>

                




                <div class="flex flex-row items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div>  <p>Spending Analyzer</p>
                <p class="w-40 text-center">Provide users with intelligent analysis of their spending, through visual medium and natural language form</p> </div>

            </div>
        </div>
    <div class="flex flex-row ">  <div class="flex flex-row items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div>  <p>Spending Analyzer</p>
                <p class="w-40 text-center">Provide users with intelligent analysis of their spending, through visual medium and natural language form</p> </div>

            </div>
            <div class="flex flex-row items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div>  <p>Spending Analyzer</p>
                <p class="w-40 text-center">Provide users with intelligent analysis of their spending, through visual medium and natural language form</p> </div>

            </div></div>
            <div class="flex flex-row items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div>  <p>Spending Analyzer</p>
                <p class="w-40 text-center">Provide users with intelligent analysis of their spending, through visual medium and natural language form</p> </div>

            </div>

    </div>

    <div class="flex flex-col items-center bg-pink-600">
    <div><h3>The benefits</h3></div>
    <div class="flex flex-row "><div class="mx-4 border-2 border-white">
    <img alt="" src={Benefits} class="w-80"/>
        </div>


        
    <div class="justify-center text-center mx-4 border-2 border-white">
        <p>Enhancing User Experience</p>
        <p class="w-60 text-center m-auto">We focus on the experience of each and every single one of your customers.
           Our intelligence machines are constantly improving themselves to never let your user down
</p>

<div class="flex flex-row justify-between ">
    <p class="mx-4 border-2 border-white">Encouraging Savings</p> 
    <p class="mx-4 border-2 border-white">Financial Tracking</p>
</div>
<div class="flex flex-row justify-between">
    <p class="mx-4 border-2 border-white">Alternative Credit Scoring</p> 
    <p class="mx-4 border-2 border-white">Seamless Loan Management</p>
</div>
<div ><p class="mx-4 border-2 border-white">Banking the Unbanked</p></div>





        </div></div>
    </div>

    <div class="flex flex-col items-center bg-blue-600">
    <div><h3>Use Cases</h3></div>
    <div class="flex flex-row justify-center mb-10"> 
    
        <div class="flex flex-row w-60 items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div> <p>SME Lending</p>
            <p>Grow your enterprise no matter where you’re located!</p></div>
        </div>
            <div class="flex flex-row w-60 items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div> <p>Personal Finance Management</p>
            <p>Consolidate all your finances in one place!</p></div>
            </div></div>
    <div class="flex flex-row  ">
        <div class="flex flex-row w-60 items-center mx-4 border-2 border-white "> 
            <img alt="" src={imgOne} class="h-20"/>
            <div> <p>Wealth Management</p>
            <p>Manage your expenses and grow your savings!</p></div>
            </div>
    <div class="flex flex-row w-60 items-center mx-4 border-2 border-white"> 
            <img alt="" src={imgOne} class="h-20"/>
            <div><p>Consumer Lending</p>
            <p>New to the workforce with no credit history? No problem!</p></div>
            </div></div>
    </div>

    <div class="flex flex-col items-center bg-green-600"><h3>Achievement Carousel</h3>

    
    <Carousel>
        {carousel.map(item => <div key={item.id}><img alt="" class="h-96 h-72" src={item.title}/></div>)}
      </Carousel>
    
      
    
    </div>
    {/* className={index % 2 === 0 ? "right" : "left"} */}

    <div class="flex flex-col items-center bg-yellow-600">
    <div><h3>TimeLine</h3></div>
   
    {/* <div class="flex flex-col  items-center mx-4 border-2 border-white "> 
        {Timeline.map((item,index)=> (
        <div class="flex flex-row divide-x divide-green-500" key={index}>
            <p class="text-right w-80 h-10 mr-4">{item.left}</p>
            <p class="w-80 h-10 pl-4">{item.right}</p>
        </div>
        ))}
</div> */}

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'transparent', color: 'blue' }}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red', color: 'blue' }}>
    <h5 class="vertical-timeline-element-title text-right">Q3 2019: Company Launch</h5>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue', border: "1px solid transparent"}}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red'}}  >
    <h5 className="vertical-timeline-element-title">Q4 2019: Winner of 4Paradigm APEX AI</h5>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue' }}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red', color: 'blue', }}  >
    <h5 className="vertical-timeline-element-title text-right">Q1 2020: Beta Release of our Transaction Classifier</h5>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue', border: "1px solid transparent"}}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red'}}  >
    <h5 className="vertical-timeline-element-title">Q2 2020: Beta Release of our Banking Recommendation Engine </h5>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue' }}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red', color: 'blue', }}  >
    <h5 className="vertical-timeline-element-title text-right">Q3 2020: Winner of BSF Virtual Hackathon</h5>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue', border: "1px solid transparent"}}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red'}}  >
    <h5 className="vertical-timeline-element-title">Q3 2020: Winner of EGBank MINT Hackathon</h5>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue' }}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red', color: 'blue', }}  >
    <h5 className="vertical-timeline-element-title text-right">Q3 2020: Winner of GIW / FrenchTech</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue' }}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red', color: 'blue', }}  >
    <h5 className="vertical-timeline-element-title">Q3 2020: Participation in MINT Incubation Program in Egypt </h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue' }}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red', color: 'blue', }}  >
    <h5 className="vertical-timeline-element-title text-right">Q4 2020: Beta Release of EZLoan Platform
</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'transparent', color: 'blue' }}
    contentArrowStyle={{ borderRight: '0px solid  transparent' }}
    iconStyle={{ background: 'red', color: 'blue', }}  >
    <h5 className="vertical-timeline-element-title">Q1 2021: Beta Release of Spending Analyzer</h5>
  </VerticalTimelineElement>
    
</VerticalTimeline>






    </div>

    <div class="flex flex-col items-center bg-gray-600">
    <div><h3>Contact</h3></div>
    <div class="flex flex-row "><div>Personalized customer experience through machine learning</div><div>Personalized customer experience through machine learning</div></div>
    <div class="flex flex-row "><div>Personalized customer experience through machine learning</div><div>Personalized customer experience through machine learning</div></div>
    <div>Personalized customer experience through machine learning</div>
    </div>

    <div class="flex flex-col items-center bg-gray-400">
    <div><h3>Footer</h3></div>
    <div class="flex flex-row "><div>Personalized customer experience through machine learning</div><div>Personalized customer experience through machine learning</div></div>
    <div class="flex flex-row "><div>Personalized customer experience through machine learning</div><div>Personalized customer experience through machine learning</div></div>
    <div>Personalized customer experience through machine learning</div>
    </div>

        </div>
    )
}

export default LandingPage
