import React from 'react';

import "./css/Home.css";

const Home = () =>
{

		return (
		    <>
             <section class="first-div">
				 <div class="container-fluid p-0 main-container-desktop">
					 <div class="container">
						<div class="row">
						  <div class="col-md-6">
				            <div class="left-col">
                                 <h1>Revidly</h1>
								<h2>Join your favourite Clans</h2>
								<p>Looking for a job? internship? or just some competition to test your skills. No need to search different websites. Just join a clan.
We have clans for Bollywood, Jokes, Politics, News, Startups, Fashion, Jobs & Internships. All updates at one place.</p>
							</div>
						  </div>

                          <div class="col-md-6 blured mt-50">
                             <div class="phone phone-use">
								 <div class="notch"></div>
                                 <div class="iframe-wrapper">
								 <iframe title="appIframe" src="http://localhost:3000/" frameborder="0" id="root"></iframe>
								 </div>
							 </div>
						  </div>

					   </div>
				     </div>
			     </div>
			  </section>
            </>
		);
	 
}



export default Home;
