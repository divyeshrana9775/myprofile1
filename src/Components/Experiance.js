import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";

export default class Experiance extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startyears}-{this.props.endyear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: "0px"}}>{this.props.jobname}</h4>
                    <p>{this.props.jobdescription}</p>
                </Cell>
            </Grid>
            )
    }
}