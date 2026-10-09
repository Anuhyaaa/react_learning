import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id : "Heading"},
    "This is my h1"
);
console.log(heading);

const jsxheading = (<h1 id="heading" className="head">This is my h1 ☺️ </h1>);
console.log(jsxheading);
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(jsxheading);

const Title = () => (
    <h1>
        My heading
    </h1>
);
const Para = () => (
    <p>This is my para which is component composition</p>
)
const lm = <span>React Element span</span>

//Component Composition
const HeadingComponent = () => (
    <div id = "container">
        <Title></Title>
        <Title />
        {Title()}
        <h1>{console.log("dfdslkvmdl")}</h1>
     <h1 className="Heading">Heading Componenet</h1>
     <Para />
    </div>
)
const title = (
    <h1 className="head">
        {lm }
        <HeadingComponent />
      React Element
    </h1>
)

const Par = () => (
    <p>This is my 1st component</p>
);
const Par2 = () => (
    <p>This is my 2nd component</p>
);

const App = () => (
    <div>
        <Par />
        <Par2 />
    </div>
)
root.render(App());