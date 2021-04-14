import React from "react";

import {Dropdown, Button, Menu, message} from "antd"
import {DownOutlined} from "@ant-design/icons"

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

function Output() {
    return(
        <>
        <div className="rectangle">

        </div>
        <div className="rectangle2">
            <h1>Algorithm Parameters</h1>
            <p>kjfdnskcklskmycklsdlcmskmck</p>
        </div>
        <div className="rectangle3">

        </div>
        <div className="drop">
            Output Interval:
            <Dropdown overlay={menu}>
                <Button>
                    -----<DownOutlined/>
                </Button>
            </Dropdown>
        </div>
        </>
    )
}

export default Output