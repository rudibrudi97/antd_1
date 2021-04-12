import './App.css';
import {Steps, Divider, Button} from 'antd';
import React from "react";
import logo from "./Areas/movisens.png";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";

const {Step} = Steps

function Ablage() {
    return(
        <>
            <div className="Sign">
                <Layout>
                    <Header style={{backgroundColor: "white"}} height="150px">
                        <img src={logo} alt="Movisens-Logo" height ="65px" width="130px" content="center"/>
                    </Header>
                    <Content>
                        <Steps>
                            <Step title = "Select Data" description="Single analysis or study mode"/>
                            <Step title = "Configure Output" description="Choose a parameter"/>
                            <Step title = "Configure Analysis" description="only useful in expert mode"/>
                            <Step title = "Prechecked data" description="Check the attributes"/>
                            <Step title = "Summary and Run" description="Check your settings and run the analysis" />
                        </Steps>

                        <Divider/>
                    </Content>
                    <Footer>
                        <Button type="primary" className="button1">Back</Button>
                        <Button type="primary" className="button2">Save&Next</Button>
                    </Footer>
                </Layout>

            </div>
        </>
    );
}

export default Ablage