import React from 'react';
import Clan from "./clans/Clans";
import "./css/Themepages.css"; 


class SelectClan extends React.Component {

    constructor() {
        super();
          
        this.state = {
           data:[
              {
                 id: 1,
                 component: 'internship',
                 count: 23456
              },
              {
                 id: 2,
                 component: 'revidly internship',
                 count: 90564
              },
              {
                 id: 3,
                 component: 'jobs',
                 count: 94783
              },
              {
                id: 4,
                component: 'travel',
                count: 23456
             },
             {
                id: 5,
                component: 'stratups',
                count: 90564
             },
             {
                id: 6,
                component: 'food',
                count: 94783
             },
             {
                id: 7,
                component: 'finance',
                count: 23456
             },
             {
                id: 8,
                component: 'tranding',
                count: 90564
             },
             {
                id: 9,
                component: 'funny',
                count: 94783
             },
             {
                id: 10,
                component: 'world politics',
                count: 23456
             },
             {
                id: 11,
                component: 'music',
                count: 90564
             },
             {
                id: 12,
                component: 'cricket',
                count: 94783
             },
             {
                id: 13,
                component: 'marketing',
                count: 23456
             },
             {
                id: 14,
                component: 'bollywood',
                count: 90564
             },
             {
                id: 15,
                component: 'beauty',
                count: 94783
             },
             {
                id: 16,
                component: 'corona virus',
                count: 23456
             },
             {
                id: 17,
                component: 'gaming',
                count: 90564
             },
             {
                id: 18,
                component: 'home decor',
                count: 94783
             }


           ]
        }
     }
     render() {

		return (
			<>
		     <div class="select-clans">
                 <from>
                     <div class="po-fix">
                   <div class="select-clan" type="button">Select Clans</div> 
                   <p>Clans are groups on Revcountly, <br/> Choose your Clans based on your interest.<br/>
                     You will only see posts your selected clans.
                   </p>

                   <a class="save-clan" type="button" href="/mainview">Save Selected Clans</a>
                   <div class="searchbox">
                       <input type="text" placeholder="Search Clans" />
                   </div>
                </div>
                   <div class="flow clearfix">
                        
                        
                        {this.state.data.map((dynamicComponent, i) => <Clan
                  key = {i} componentData = {dynamicComponent}/>)}
                       
                        
                   </div>

                 </from>
             </div>
			</>
		);
   }
}



export default SelectClan;
