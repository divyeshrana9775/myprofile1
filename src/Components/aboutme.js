import React,{Component} from "react";
import {Grid, Cell} from "react-mdl";
export default class Aboutme extends Component{
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
                        
                        </div>
                        
                        <h4 class="css-typing" style={{color: "grey"}}>Introduction</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width: "300%"}}/>
                        <div >
                        <p  style={{fontSize:"20px", fontWeight:400, lineHeight:"24px", marginBottom:"16px", marginRight:"-1000px", textAlign:"justify"}}>
                        Hello! My name is Divyesh Rana, I am a Full-stack web developer based in New Jersey, USA.
                        I love to Graphics design and develop web applications. I am currently available for the full-time positions,
                        so If you are a recruiter and looking to hire a developer with a passion for learning new technology,
                        feel free to email me at divyeshrana66@yahoo.in.
                        </p>
                        </div>
                        <h4 class="css-typing" style={{color: "grey"}}>A little more…</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width: "300%"}}/>
                        <p style={{fontSize:"20px", fontWeight:400, lineHeight:"24px", marginBottom:"16px", marginRight:"-1000px", textAlign:"justify"}}>
                        I was born and raised in Surat; aka the diamond city of Gujarat, India. The days of my childhood were pretty average; a little bit of study,
                        Fun with friends and Music can literally sum up my childhood. I think I was 17 years old when I first got introduced to Computers
                        and fell in love with digital Computer Graphics Designer and The World Wide Web.
                        </p>
                        <h4 class="css-typing" style={{color: "grey"}}>Education</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width: "300%"}}/>
                        <p style={{fontSize:"20px", fontWeight:400, lineHeight:"24px", marginBottom:"16px", marginRight:"-1000px", textAlign:"justify"}}>
                        Coming from a wealthy family background, I was fortunate enough to pursue Computer Science as my carrier. I’ve studied Bachelor of Commerce and Bachelor of Computer
                        in Information Technology from VNSGU.
                        All of my academic achievements belongs to my lovely parents, without their help and support I couldn’t have gotten the best education.
                        </p>
                        <h4 class="css-typing" style={{color: "grey"}}>A love for Web Development…</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width: "300%"}}/>
                        <p style={{fontSize:"20px", fontWeight:400, lineHeight:"24px", marginBottom:"16px", marginRight:"-1000px", textAlign:"justify"}}>
                        I’ve previously worked on few Graphics Designer during my bachelor degree but I got really interested in web development when I first
                        found out about FreeCodeCamp.org community. I started with HTML5, CSS3, and JavaScript and couldn’t stop myself learning more about web technologies.
                        </p>
                        
                       
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

