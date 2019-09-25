import React,{Component} from "react";
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from "react-mdl";
import Calculator from "../Images/calculator.PNG";
import drum from "../Images/drum.png";
import clock from "../Images/clock.png";


export default class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:0
        }}
        toggleCategories(){
            if(this.state.activeTab===0){
                return (
                    <div className="projects-grid">
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle>  <img src={Calculator} style={{height:"100px", width:"100px"}}/>Calculator</CardTitle>
                 <CardText>
                 <center>Html  CSS3  Javascript</center>
                </CardText>
                <CardActions border>
               <a href="https://divyeshrana9775.github.io/Calculator/"><center>Website</center></a>
               
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                 </Card>
                 <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle>  <img src={drum} style={{height:"100px", width:"100px"}}/>Drum</CardTitle>
                 <CardText>
                 <center>Html  CSS3  Javascript</center>
                </CardText>
                <CardActions border>
               <a href="https://divyeshrana9775.github.io/Drum-Kit/"><center>Website</center></a>
               
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                 </Card>
                 <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle>  <img src={clock} style={{height:"100px", width:"100px"}}/>Calculator</CardTitle>
                 <CardText>
                 <center>Html  CSS3  Javascript</center>
                </CardText>
                <CardActions border>
               <a href="https://divyeshrana9775.github.io/Clock/"><center>Website</center></a>
               
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                 </Card>
                </div>
                )
                 }
                 if(this.state.activeTab===1){
                    return (
                        <div className="projects-grid">
                        <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                        <CardTitle>  <img src={Calculator} style={{height:"100px", width:"100px"}}/>Calculator</CardTitle>
                     <CardText>
                     <center>Html  CSS3  Javascript</center>
                    </CardText>
                    <CardActions border>
                   <a href="https://divyeshrana9775.github.io/Calculator/"><center>Website</center></a>
                   
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                     </Card>
                     <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                        <CardTitle>  <img src={Calculator} style={{height:"100px", width:"100px"}}/>Calculator</CardTitle>
                     <CardText>
                     <center>Html  CSS3  Javascript</center>
                    </CardText>
                    <CardActions border>
                   <a href="https://divyeshrana9775.github.io/Calculator/"><center>Website</center></a>
                   
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                     </Card>
                     <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                        <CardTitle>  <img src={Calculator} style={{height:"100px", width:"100px"}}/>Calculator</CardTitle>
                     <CardText>
                     <center>Html  CSS3  Javascript</center>
                    </CardText>
                    <CardActions border>
                   <a href="https://divyeshrana9775.github.io/Calculator/"><center>Website</center></a>
                   
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                     </Card>
                    </div>
                    )
                    
                    
                }else if(this.state.activeTab===0){
                return (<body>
                    <div className="projects-grid">
            
             </div>
             
             </body>
                )
            }else if(this.state.activeTab===1){
                return (<body>
                    <div className="projects-grid">
            
             </div>
             
             </body>
                )
            }else if(this.state.activeTab===3){
                return <h1>MongoDB</h1>
            }
                
            
        }
        
        
    render(){
      
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>Projects</Tab>
                    <Tab>Projects</Tab>
                    
                </Tabs>
            <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
        </Grid>
        
        </div>
        
        )
    }
}
