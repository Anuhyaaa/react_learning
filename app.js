import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {key : 3}, "First H😁1"),
            React.createElement("h1", {key : 4}, "Second H1"),
            React.createElement(
                "div",
                { id: "grandchild",key : 5 },
                [
                    React.createElement("h2", {key : 1}, "Third H2"),
                    React.createElement("h2", {key : 2}, "Fourth H2")
                ]
            )
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);