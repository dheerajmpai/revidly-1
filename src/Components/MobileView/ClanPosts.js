import React from "react";
import Profile from "./img/profile.png";
import Pr1 from "./img/pr1.jpg";
import Pr2 from "./img/pr2.png";
import B1 from "./img/b1.jpg";
import Share from "./img/share.png";
import Chat from "./img/chat.png";
import T1 from "./img/t1.jpg";
import L1 from "./img/l1.jpg";
import Footer from "./Footer/Footer";
import Reddy from "./img/reddy.jpg";

import "./css/Postview.css";
 
const ClanPosts = () => {
    return (
      <> 
        <div className="top-he">
          <div className="profile-search">
              <img src={Profile} alt="" />
              <div className="example">
                  Beauty
              </div>
          </div>
          <div className="reddy clearfix">
              <div className="redd1">
                <img src={Reddy} alt="" /> <span>0</span>
              </div>
              <div className="redd2">
                  <a href="#0">Check Leaderboard</a>
              </div>
              <div className="redd3">
                  <button type="button"><i class="fas fa-user-plus"></i></button>
                  <button type="button"><i class="far fa-bell"></i></button>
              </div>
          </div>
          
        </div>

        <div className="postdiv">
            <div className="post-box">
                <div className="profile clearfix">
                    <img src={Pr1} alt=""/>
                    <div className="profile-detail">
                        <h5>Beauty</h5>
                        <p>Shiva Ram  <span className="posted-date">Yesterday at 2:40 PM</span></p>
                    </div>
                </div>
                <img src={B1} alt="" className="width-100"/>
                <div className="post-footer">
                    <ul>
                        <li><button className="votes"><i className="fas fa-arrow-up"></i> 0 Upvotes</button></li>
                        <li><button className="p-comment"> 8 <img  src={Chat} alt=""/></button></li>
                        <li><button className="p-share"> <img  src={Share} alt=""/></button></li>
                        <li><button className="view"><i className="far fa-eye"></i> 7</button></li>
                        <li><button className="p-down"> <i className="fas fa-arrow-down"></i> 0 Downvotes</button></li>
                    </ul>
                </div>
            </div>

            <div className="post-box">
                <div className="profile clearfix">
                    <img src={Pr2} alt=""/>
                    <div className="profile-detail">
                        <h5>Beauty</h5>
                        <p>Shiva Ram  <span className="posted-date">Yesterday at 2:40 PM</span></p>
                    </div>                    
                </div>
                <div className="post-content">
                        "ARA HOTEL GADING SERPONG BRAND NEW KIDS SWIMMING POOL"

                        <p>Ara Hotel Gading Serpong has reopened the kids swimming pool and 
                            comes with new facilities to our kids swimming pool on 1st August 2019.</p>
                </div>
                
                <img src={T1} alt="" className="width-100"/>
                <div className="post-footer">
                    <ul>
                        <li><button className="votes"><i className="fas fa-arrow-up"></i> 0 Upvotes</button></li>
                        <li><button className="p-comment"> 8 <img  src={Chat} alt=""/></button></li>
                        <li><button className="p-share"> <img  src={Share} alt=""/></button></li>
                        <li><button className="view"><i className="far fa-eye"></i> 7</button></li>
                        <li><button className="p-down"> <i className="fas fa-arrow-down"></i> 0 Downvotes</button></li>
                    </ul>
                </div>
            </div>
            
            <div className="post-box">
                <div className="profile clearfix">
                    <img src={Pr1} alt=""/>
                    <div className="profile-detail">
                        <h5>Beauty</h5>
                        <p>Pooja Maurya  <span className="posted-date">Wednesday at 2:40 PM</span></p>
                    </div>                    
                </div>
                <div className="post-content">
                FASHION RHAPSODY IS COMING THIS YEAR WITH A THEME “HARMONY BUMI”

                        <p>Introducing Ariy Arka, Ayu Dyah Andari, Chintami Atmanagara, 
                            and Yulia Fandy, local fashion designers often showcase their designs in 
                            large events organized, 
                            such as Indonesia Fashion Week, Ramadhan Runway, and others.</p>
                </div>
                
                <img src={L1} alt="" className="width-100"/>
                <div className="post-footer">
                    <ul>
                        <li><button className="votes"><i className="fas fa-arrow-up"></i> 3 Upvotes</button></li>
                        <li><button className="p-comment"> 8 <img  src={Chat} alt=""/></button></li>
                        <li><button className="p-share"> <img  src={Share} alt=""/></button></li>
                        <li><button className="view"><i className="far fa-eye"></i> 7</button></li>
                        <li><button className="p-down"> <i className="fas fa-arrow-down"></i> 4 Downvotes</button></li>
                    </ul>
                </div>
            </div>
          

        </div>
        
        <Footer/>
    </>

    )
}

export default ClanPosts;
