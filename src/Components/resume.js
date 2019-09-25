import React,{Component} from "react";
import {Grid, Cell} from "react-mdl";
import Education from "./education";
import Experiance from "./Experiance";
import Skills from "./Skills";
import Photo from "../Images/photo.jpg";

export default class Resume extends Component{
    render(){
        return(
            <html>
            <body>
            <main data-router-wrapper>
            <section data-router-view="resume">
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:"center"}}>
                        <img src={Photo}
                      alt="avatar" className="avatar-img"/>
                        </div>
                        <h2 style={{paddingTop: "2em"}}>Divyeshchandra J. Rana</h2>
                        <h4 style={{color: "grey"}}>Programmer</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                        <p>Information Technology Professional capable of managing technology projects from concept to complete with
                            remarkable deadline sensitivity. Three Years experiance as information developer builder.
                        </p>
                             <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                        <h5>Address</h5>
                        <p>99, Gregory Avenue, Passaic, NJ-07055.</p>
                        <h5>Phone</h5>
                        <p>973 563 7375</p>
                        <h5>Email</h5>
                        <p>divyeshrana9775@gmail.com</p>
                       
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education startyears={2014} endyear={2017} schoolname={"VNSGU"} schooldescription={"Bachelor in Computer Science"}/>
                        <Education startyears={2018} endyear={2019} schoolname={"FreeCodeCamp"} schooldescription={"Full-Stack Developer"}/>
                        <hr style={{borderTop: "solid 3px red" }}/>
                        <h2>Experiance</h2>
                        <Experiance startyears={2017} endyear={2019} jobname={"GLOBELA PHARMA PVT LTD"} jobdescription={"Graphics & Web Designer"}/>
                        
                        <hr style={{borderTop: "solid 3px red" }}/>
                        <h2>Skills</h2>
                       <Grid>
                       <Cell>
                        <Skills skill={"Javascript"} progress={80}/>
                        <Skills skill={"React"} progress={50}/>
                        <Skills skill={"MongoDB"} progress={100}/>
                        <Skills skill={"Node"} progress={80}/>
                        
                        </Cell>
                        <Cell>
                         <Skills skill={"Html"} progress={100}/>
                        <Skills skill={"CSS"} progress={100}/>
                        <Skills skill={"Git"} progress={100}/>
                        <Skills skill={"Github"} progress={100}/>
                        </Cell>
                        <Cell>
                         <Skills skill={"CorelDraw"} progress={100}/>
                        <Skills skill={"Photoshop"} progress={100}/>
                        <Skills skill={"Illustrator"} progress={100}/>
                        <Skills skill={"Indesign"} progress={100}/>
                        </Cell>
                       </Grid>
                        
                    </Cell>
                </Grid>
            </div>
            </section>
        </main>
        <script src="../index.js"></script>
        </body>
        </html>
        )
    }
}