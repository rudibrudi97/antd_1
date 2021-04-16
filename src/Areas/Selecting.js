import React from "react"
import {Select} from "antd";

const {Option} = Select

function handleChange(value) {
    console.log(`selected ${value}`);
}

const styling = {
    width: 80,
    margin: "0px 0px 0px 20px "
}

function Selecting() {
    return(
        <>
             <Select defaultValue="60s" style={styling} onChange={handleChange}>
                    <Option value="10s">10s</Option>
                    <Option value="15s">15s</Option>
                    <Option value="30s">30s</Option>
                    <Option value="60s">60s</Option>
                    <Option value="600s">600s</Option>
                </Select>
        </>
    )
}

export default Selecting