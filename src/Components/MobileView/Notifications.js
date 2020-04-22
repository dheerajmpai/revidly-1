import React from "react";
import N1 from "./img/fashion.jpg";
import N2 from "./img/food.jpg";
import Footer from "./Footer/Footer";

const Notifications = () =>
{
    return(
      <>
         <div className="noti-head">
              <h5><i class="far fa-bell"></i> Notifications</h5>
         </div>

         <div className="notification-list">
             <div className="noti-box clearfix">
                  <img src={N1} alt=""/>
                  <div className="noti-detail">
                       <h6>Tranding in future</h6>
                       <p>FASHION RHAPSODY IS COMING THIS YEAR WITH A THEME “HARMONY BUMI”

                       Introducing Ariy Arka, Ayu Dyah Andari, Chintami Atmanagara, 
                            and Yulia Fandy, local fashion designers often showcase their designs in 
                            large events organized, 
                            such as Indonesia Fashion Week, Ramadhan Runway, and others.</p>
                  </div>
             </div>

             <div className="noti-box clearfix">
                  <img src={N2} alt=""/>
                  <div className="noti-detail">
                       <h6>Tranding in future</h6>
                       <p>FASHION RHAPSODY IS COMING THIS YEAR WITH A THEME “HARMONY BUMI”

                       Introducing Ariy Arka, Ayu Dyah Andari, Chintami Atmanagara, 
                            and Yulia Fandy, local fashion designers often showcase their designs in 
                            large events organized, 
                            such as Indonesia Fashion Week, Ramadhan Runway, and others.</p>
                  </div>
             </div>

             <div className="noti-box clearfix">
                  <img src={N1} alt=""/>
                  <div className="noti-detail">
                       <h6>Tranding in future</h6>
                       <p>FASHION RHAPSODY IS COMING THIS YEAR WITH A THEME “HARMONY BUMI”

                       Introducing Ariy Arka, Ayu Dyah Andari, Chintami Atmanagara, 
                            and Yulia Fandy, local fashion designers often showcase their designs in 
                            large events organized, 
                            such as Indonesia Fashion Week, Ramadhan Runway, and others.</p>
                  </div>
             </div>


             <div className="noti-box clearfix">
                  <img src={N2} alt=""/>
                  <div className="noti-detail">
                       <h6>Tranding in future</h6>
                       <p>FASHION RHAPSODY IS COMING THIS YEAR WITH A THEME “HARMONY BUMI”

                       Introducing Ariy Arka, Ayu Dyah Andari, Chintami Atmanagara, 
                            and Yulia Fandy, local fashion designers often showcase their designs in 
                            large events organized, 
                            such as Indonesia Fashion Week, Ramadhan Runway, and others.</p>
                  </div>
             </div>
         </div>
          <Footer />
      </>
    )
    
}

export default Notifications;