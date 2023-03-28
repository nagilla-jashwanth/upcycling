import React from 'react'
import './Home1.css'
import { Outlet, Link } from 'react-router-dom'
function Home() {



  return (
   <div className="main" id='home'>
    <div className='card text-center border'>
      <h2>Sell Your Recyclables Online With Upcycling Community</h2>
      <img src='https://maycointernational.com/wp-content/uploads/2020/10/commercial-plastic-recycling.jpeg'  width={300} height={300} className='im'/>
    
      <img src=''   />
      
    </div>  
    <div className='work'>
    <h2>How it works?</h2>
    </div>
    <div className='row justify-content-around'>
      <div className="col-lg-4 col-md-6 ">
      <div className="how_works_col"><h4>Schedule a pickup <img src='https://ik.imagekit.io/y8s2vhk66ef/undraw_Online_calendar_re_wk3t_1_SHrgqjm1w6l.png?updatedAt=1628624813421' /> </h4></div>
    <div className="how_works_col"><h4>Pickup at doorstep</h4><img src='https://ik.imagekit.io/y8s2vhk66ef/undraw_Street_food_re_uwex_1_tHCc3auJgJY.png?updatedAt=1628624814853' /></div>
    <div className="how_works_col"><h4>Receive Rewards</h4><img src='https://ik.imagekit.io/y8s2vhk66ef/undraw_Credit_card_payments_re_qboh_1_Sop8u3hvUiX.png?updatedAt=1628624812461'/>
    </div>
    </div>
    </div>
    <div className='cd'>
      <h3>We will service the poor by providing books,clothes which are collected from you.</h3>
    </div>
    <div> 
    </div>
   
    </div>
  )
}

export default Home
