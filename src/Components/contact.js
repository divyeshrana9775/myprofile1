import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Paul Hanna</h2>
                        <img src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg" style={{ height: "250px" }} />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>Article 15 was the opening film for the 10th edition of London Indian Film Festival, premiering on 20 June
                            2019.[10][11] It was theatrically released in India on 28 June 2019. The film received positive reviews from
                            critics for the sensitive portrayal of its subject matter.[12] The film grossed over ₹914 million (US$13 million)
                    against a budget of ₹300 million (US$4.3 million) to emerge as a commercial success.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily:"Anton"}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    202 202 202
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily:"Anton"}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    202 202 202
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily:"Anton"}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    202 202 202
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "30px", fontFamily:"Anton"}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    202 202 202
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}