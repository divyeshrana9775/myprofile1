import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import {Link} from "react-router-dom";
import logo from "../src/Images/logo.png";


class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link to="/"><img src={logo} height="50px" width="50px" style={{paddingTop:"30px"}}
                      /></Link>} scroll>
            <Navigation>
                <Link to="/Resume">RESUME</Link>
                <Link to="/Aboutme">ABOUTME</Link>
                <Link to="/Projects">PROJECTS</Link>
            </Navigation>
        </Header>
      
        <Content>
            <div className="page-content">
                <Main />
            </div>
        </Content>
    </Layout>
</div>
  );
}
}
export default App;
