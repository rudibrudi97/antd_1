import './App.css';
import {Steps, Divider} from 'antd';
import React from "react";
import {Layout} from "antd";
import Header from "./Areas/Header";
import Footer from "./Areas/Footer";

const {Content} = Layout

const {Step} = Steps

function Sign() {
        return(
        <>
            <div className="Sign">
                <Layout>
                    <Header/>
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
                    <Footer/>
                </Layout>

            </div>
        </>
        );
    }

export default Sign