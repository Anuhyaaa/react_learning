const div = React.createElement(
    "div",{id : "parent"},
    React.createElement(
        "div",{id : "child"},
        [
            React.createElement("h1",{},"First H1"),
            React.createElement("h1",{},"Second H1")
        ],
        React.createElement(
            "div",{id:"grandchild"},
            [
             React.createElement("h2",{},"Third H2"),
             React.createElement("h2",{},"Fourth H2")
            ]
        )
    )
);
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(div);