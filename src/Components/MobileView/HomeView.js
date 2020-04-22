import React from 'react';
import Logo from "./img/logo.png";
import Google from "./img/google.png";

import "./css/Homeview.css"; 


const HomeView = () =>
{

		return (
			<>
		     <div class="main-theme">
                 <img src={Logo}  class="logo" alt=""/>

				  <h4>The new internet of India.</h4>
                  <h4>Connecting  Indians to make India grow.</h4>

				  <h5>Explore.Share.Grow.</h5>

				   <a class="btn-facebook" href="/selectclan">
				    <i class="fab fa-facebook"></i>  Continue with Facebook
				   </a>
                       
                   <a class="btn-google"  href="/selectclan">
					 <img src={Google} alt="" /> Sign in with google
				   </a>

                  <p>By Continuing you indicate that you have read and agree to Revidly 
					  <a href="#0">Terms of Service</a> and <a href="#0">Privacy Policy</a></p>

				  <h5 class="copywrite">© Revidly 2020</h5>
             </div>
			</>
		);
	
}



export default HomeView;
