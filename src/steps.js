import {Steps, Divider} from 'antd';
import React from "react";

const {Step} = Steps

class Sign extends React.Component {
    state = {
        current: 0,
    }

    onChange = current => {
        console.log('onChange:', current);
        this.setState({current});
    };
    render() {
        const {current} = this.state

        return(
            <>
            <Steps current = {current} onChange={this.onChange} direction="horizontal">
                <Step title = "Select Data" description="Single analysis or study mode"/>
                <Step title = "Configure Output" description="Choose a parameter"/>
                <Step title = "Configure Analysis" description="only useful in expert mode"/>
                <Step title = "Prechecked data" description="Check the attributes"/>
                <Step title = "Summary and Run" description="Check your settings and run the analysis" />
            </Steps>

            <Divider/>
            </>
        );
    }
}

export default Sign