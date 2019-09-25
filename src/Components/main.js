import React from "react";
import Landigpage from "./landingpage";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import {Switch, Route} from "react-router-dom";


 const Main = () => (
    <Switch>
        <Route exact path="/" component={Landigpage}/>
        <Route path="/Aboutme" component={Aboutme}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
    </Switch>
 )
export default Main;