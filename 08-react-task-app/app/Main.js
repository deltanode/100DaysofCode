import React from "react";
import ReactDOM from "react-dom/client";

function Main(){
    <>
        <Header />
    </>
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />)