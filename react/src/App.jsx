import React from "react";

// import Exam from './Exam'
import {
    Article,
    Brand,
    CTA,
    Feature,
    Navbar,
    FormInput,
    Content,
    Profile,
} from "./components";

import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    Whatsepp,
    Login,
} from "./containers";
import "./App.css";
import "./index.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
