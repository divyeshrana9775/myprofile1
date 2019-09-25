import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";

export default class Education extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startyears}-{this.props.endyear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: "0px"}}>{this.props.schoolname}</h4>
                    <p>{this.props.schooldescription}</p>
                </Cell>
            </Grid>
        )
    }
}