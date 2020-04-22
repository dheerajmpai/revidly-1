import React from "react";
import Edit from "./img/pencil.png";
import New1 from "./img/download.jpg";
import Fashion from "./img/fashion.jpg";
import Food from "./img/food.jpg";
import Politics from "./img/politics.jpg";
import Internship from "./img/internship.jpeg";
import Jobs from "./img/jobs.jpg";
import News from "./img/news.jpg";
import Funny from "./img/funny.jpg";
import Travel from "./img/travel.jpg";
import "./css/Mainview.css";
import Footer from "./Footer/Footer";


const Mainview = () => {
    return (
      <> 
       <div className="fit-top"> 
        <div className="topheader clearfix">
           <h1>Revidly  <a href="/selectclan"> <img src={Edit} alt=" " /></a></h1>
        </div>

        <div className="searchdiv">
          <input type="text" name="search" placeholder="Search.." />
        </div>
       </div>
        <div className="newslist">

            <div className="news-sm clearfix">
              <a href="/clanpost">
               <img src={New1} alt="" />
               <div className="news-smdetails">
                    <h6>All Posts</h6>
                    <p>Posts from your Chosen Clans</p>
               </div>
              </a>
            </div>

            <div className="news-sm clearfix">
             <a href="/clanpost">
               <img src={Fashion} alt="" />
               <div className="news-smdetails">
                    <h6>Fashion</h6>
                    <p>No New Post</p>
               </div>
              </a>
            </div>

            <div className="news-sm clearfix">
             <a href="/clanpost">
               <img src={Food} alt="" />
               <div className="news-smdetails">
                    <h6>Food</h6>
                    <p>No New Post</p>
               </div>
              </a>
            </div>

            <div className="news-sm clearfix">
             <a href="/clanpost">
               <img src={Politics} alt="" />
               <div className="news-smdetails">
                    <h6>Indian Politics</h6>
                    <p>No New Post</p>
               </div>
              </a>
            </div>

            <div className="news-sm clearfix">
              <a href="/clanpost">
               <img src={Internship} alt="" />
               <div className="news-smdetails">
                    <h6>Interships</h6>
                    <p>No New Post</p>
               </div>
               </a>
            </div>

            <div className="news-sm clearfix">
              <a href="/clanpost">
               <img src={Jobs} alt="" />
               <div className="news-smdetails">
                    <h6>Jobs</h6>
                    <p>No New Post</p>
               </div>
               </a>
            </div>

            <div className="news-sm clearfix">
             <a href="/clanpost">
               <img src={News} alt="" />
               <div className="news-smdetails">
                    <h6>News</h6>
                    <p>No New Post</p>
               </div>
              </a>
            </div>

            <div className="news-sm clearfix">
            <a href="/clanpost">
               <img src={Funny} alt="" />
               <div className="news-smdetails">
                    <h6>Funny</h6>
                    <p>No New Post</p>
               </div>
              </a>
            </div>
            
            <div className="news-sm clearfix">
              <a href="/clanpost">
               <img src={Travel} alt="" />
               <div className="news-smdetails">
                    <h6>Travle</h6>
                    <p>No New Post</p>
               </div>
               </a>
            </div>


        </div>

        <Footer/>
      </>
    )
}

export default Mainview;