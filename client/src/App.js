import React from "react";

import "./App.css";

const handleFetch = () => {
    fetch("/api", {
        method: "GET",
    })
    .then((response) => {
        return response.text()
    })
    .then((text) => {
        console.log(text)
    })
}

function App() {
    return(
        <div>
            <div className="App">
                <h1> Hello, World!! </h1>
            </div>
            <button onClick={handleFetch}>
                API Call
            </button>
        </div>
    );
}

export default App;