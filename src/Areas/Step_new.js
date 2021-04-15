import React from "react";
import {Steps, Button, message} from "antd";
import Output from "./Output";

const {Step} = Steps;

const steps = [
    {
        title: "Select Data",
        description: "Select single or study mode",
        content: "First-Content"
    },
    {
        title: "Configure Output",
        content: <Output/>
    },
    {
        title: "Configure Analysis",
        content: "Third Content"
    },
    {
        title: "Prechecked Data",
        content: "Four Content"
    },
    {
        title: "Summary & Run",
        content: "Last content"
    }
]

const Stufe = () => {
    const [current, setCurrent] = React.useState(0)

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    }


    return(
        <>
        <Steps current = {current}>
            {steps.map(item => (<Step key={item.title} title={item.title}/>
            ))}
        </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current > 0 && (
                    <Button type="primary" className="button1" onClick={() => prev()}>
                        Back
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" className="button2" onClick={() => next()}>
                        Save & Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" className="button2"
                            onClick={() => message.success('Processing complete!')}>
                        Start
                    </Button>
                )}
            </div>
        </>
    )
}

export default Stufe