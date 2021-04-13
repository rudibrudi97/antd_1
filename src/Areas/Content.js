import React from "react";
import {Steps, Divider, Dropdown, Button, Menu, message} from "antd"
import {DownOutlined} from "@ant-design/icons"

const {Step} = Steps

function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">10s</Menu.Item>
        <Menu.Item key="2">15s</Menu.Item>
        <Menu.Item key="3">30s</Menu.Item>
        <Menu.Item key="4">60s</Menu.Item>
        <Menu.Item key="5">600s</Menu.Item>
    </Menu>
)

function Content() {
    return(
        <div>
            <Steps className="Step_css">
                <Step title = "Select Data" description="Single analysis or study mode"/>
                <Step title = "Configure Output" description="Choose a parameter"/>
                <Step title = "Configure Analysis" description="only useful in expert mode"/>
                <Step title = "Prechecked data" description="Check the attributes"/>
                <Step title = "Summary and Run" description="Check your settings and run the analysis" />
            </Steps>

            <Divider/>

            <div className="rectangle">

            </div>
            <div className="rectangle2">
                <h1>Algorithmus-Parameter</h1>
                <p>kjfdnskcklskmycklsdlcmskmck</p>
            </div>
            <div className="rectangle3">

            </div>
            <div className="drop">
                Output Interval:
                <Dropdown overlay={menu}>
                    <Button>
                         _____<DownOutlined/>
                    </Button>
                </Dropdown>
            </div>
        </div>
    )
}

export default Content