import './App.css';
import React from "react";
import {Layout} from "antd";
import Header from "./Areas/Header";
import Footer from "./Areas/Footer";
import Content from "./Areas/Content";

function Sign() {
        return(
        <>
            <div className="Sign">
                <Layout>
                    <Header/>
                    <Content/>
                    <Footer/>
                </Layout>

            </div>
        </>
        );
    }

export default Sign