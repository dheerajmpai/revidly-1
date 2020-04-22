import React from "react";
import "../css/Footer.css";

const Footer = () =>
{
    return(

      
          <div className="footer">
              <ul>
                  <li><a  href="/mainview"><i className="fas fa-home"></i> <span>Home</span></a></li>
                  <li><a  href="/post"><i class="fas fa-list-alt"></i> <span>Feed</span></a></li>
                  <li><a  className="" href="#0"><i class="fas fa-plus"></i> <span>Add</span></a></li>
                  <li><a  href="/notification"><i class="far fa-bell"></i> <span>Notifications</span></a></li>
                  <li><a  href="/profile"><i className="far fa-user-circle"></i> <span>Profile</span></a></li>
              </ul>

          </div>
       
    );

}

export default Footer;