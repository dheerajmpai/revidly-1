import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from "./Footer/Footer";
import ProfilePic from "./img/profile.png";
import "./css/Profile.css";


class Profile extends React.Component {

    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
      }
    

    render()
    {
    return(
     <>
        <div className="profile-head clearfix">
            <button  type="button"><i className="fas fa-long-arrow-alt-left"></i></button>
             <h1> UserName </h1>
             <button onClick={this.showMenu} type="button" className="dd">
                <i class="fas fa-ellipsis-v"></i>
            </button>

            {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <a href="#0">About Us </a>
                <a href="#0"> Disclaimer </a>
                <a href="#0"> Logout </a>
              </div>
            )
            : (
              null
            )
        }
        
        </div>
        <div className="user-profile">
            <img src={ProfilePic} alt="" className="profile-pic"/>
            <h4>UserName</h4>
            <ul className="profile-counting">
               <li><h4>0</h4><span>Followers</span></li>
               <li><h4>0</h4><span>Following</span></li>
               <li><h4>0</h4><span>Upvotes</span></li>
            </ul>
            <button className="btn-profile first" type="button">Change Clans</button>
            <button className="btn-profile" type="button">Invite friends</button>
        </div>
        
        <div className="tab-value">
        <Tabs>
            <TabList>
                <Tab>POSTS</Tab>
                <Tab>CLANS</Tab>
            </TabList>
            <div className="tab-content">
                <TabPanel>
                   <h6 className="empty-con">You have not posted anything yet</h6>
                </TabPanel>
                <TabPanel>
                <ul className="clans-list">
                        <li> 
                            <label className="labl" id="foods" >
                            <input type="checkbox" id="foods" value="foods"  />
                                <div>Food</div>
                            </label>
                        </li> 
                        <li> 
                            <label className="labl" id="technology" >
                            <input type="checkbox" id="technology" value="technology"  />
                                <div>Technology</div>
                            </label>
                        </li> 
                        <li> 
                            <label className="labl" id="fashion" >
                            <input type="checkbox" id="fashion" value="fashion"  />
                                <div>Fashion</div>
                            </label>
                        </li> 
                        
                        <li> 
                            <label className="labl" id="internship" >
                            <input type="checkbox" id="internship" value="internship"  />
                                <div>Internship</div>
                            </label>
                        </li> 

                        <li> 
                            <label className="labl" id="revidlyinternship" >
                            <input type="checkbox" id="revidlyinternship" value="revidly internship"  />
                                <div>Revidly internship</div>
                            </label>
                        </li>

                        <li> 
                            <label className="labl" id="travel" >
                            <input type="checkbox" id="travel" value="travel"  />
                                <div>Travel</div>
                            </label>
                        </li>

                        <li> 
                            <label className="labl" id="finance" >
                            <input type="checkbox" id="finance" value="finance"  />
                                <div>Finance</div>
                            </label>
                        </li>

                    </ul>
                </TabPanel>
            </div>
        </Tabs>
        </div>

        <Footer />
     </>

    );
}
}

export default Profile;