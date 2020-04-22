import React from 'react';


class Clans extends React.Component {
    render() {
       return (
         
             <label class="labl" id="{this.props.componentData.id}" >
                <input type="checkbox"       id="{this.props.componentData.id}" value="{this.props.componentData.component}"  />
                    <div>{this.props.componentData.component}</div>
                <span><i class="fas fa-users"></i> {this.props.componentData.count}</span>
            </label>
       );
    }
 }
 export default Clans;