import './App.css';
import React from "react";
import {Layout} from "antd";
import Header from "./Areas/Header";
import Content from "./Areas/Content";

function Sign() {
        return(
        <>
            <div className="Sign">
                <Layout>
                    <Header/>
                    <Content/>
                </Layout>

            </div>
        </>
        );
    }

export default Sign