import React,{Component} from "react";
import {Grid,Cell} from "react-mdl";
import Photo from "../Images/photo.jpg";

export default class Landingpage extends Component{
    render(){
        return(
            <html>
            <body>
           
        
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={Photo}
                        alt="avatar" className="avatar-img swing"/>
                        <div className="banner-text">
                            <h1>Full StackDeveloper</h1>
                            <hr/>
                            <p>HTML/CSS | Javascript | Bootstrap | React | NodeJa | Express | MongoDB</p>
                            <div className="social-links">
                                {/*Linkeding */}
                                <a href="https://www.linkedin.com/in/divyeshchandra-rana-20080918a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*Linkeding */}
                                <a href="https://www.facebook.com/divyeshchandr" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-f" aria-hidden="true"/>
                                </a>
                                {/*freecodecamp */}
                                <a href="https://github.com/divyeshrana9775" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                                  {/*freecodecamp */}
                                  <a href="mailto:divyeshrana9775@gmail.com?Subject=Hello%20again" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-google" aria-hidden="true"/>
                                </a>
                                
                            </div>
                        </div>
                        
                    </Cell>
                </Grid>
                
            </div>
      

        </body>
        </html>
        )
    }
}