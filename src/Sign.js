import './App.css';
import React from "react";
import {Layout} from "antd";
import Content from "./Areas/Content";

function Sign() {
        return(
        <>
            <div className="Sign">
                <Layout>
                    <Content/>
                </Layout>

            </div>
        </>
        );
    }

export default Sign