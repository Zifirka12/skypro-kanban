import React from "react";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard.jsx";
import Header from "../components/Header/Header.jsx";
import {PageWrapper} from "../components/App/App.styled.js";

function AddTask() {
    return (<PageWrapper>
        <PopNewCard/>
        <Header/>
    </PageWrapper>);
}

export default AddTask;