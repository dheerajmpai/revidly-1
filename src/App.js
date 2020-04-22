import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Media from 'react-media';

import Home from "./Components/DesktopView/Home";
import HomeView from "./Components/MobileView/HomeView";
import SelectClan from "./Components/MobileView/SelectClan";
import Mainview from "./Components/MobileView/Mainview";
import Post from "./Components/MobileView/Post";
import ClanPost from "./Components/MobileView/ClanPosts";
import Profile from "./Components/MobileView/Profile";
import Notification from "./Components/MobileView/Notifications";

class App extends React.Component {
  render() {
  return (
    <>  
    <Media query="(min-width:1024px)">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
      </Switch>
    </Media>

    <Media query="(max-width:1023px)">
      <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/homeview">
            <HomeView />
          </Route>
          <Route exact path="/selectclan">
            <SelectClan />
          </Route>
          <Route exact path="/mainview">
            <Mainview />
          </Route>
          <Route exact path="/post">
            <Post />
          </Route>
          <Route exact path="/clanpost">
             <ClanPost/>
          </Route>
          <Route exact path="/profile">
             <Profile/>
          </Route>
          <Route exact path="/notification">
             <Notification/>
          </Route>
      </Switch>
    </Media>
   </>
    );
  
}
}

export default withRouter(App);
