/*
<div id= "parent">
<div id= "child1">
<h1>Hello I am a Headind under Children<h1>
<h2>Hello I am a sibling<h2>
</div>
<div id= "child2">
<h1>Hello I am a Headind under Children<h1>
<h2>Hello I am a sibling<h2>
</div>
</div>

*/


// let heading = React.createElement("h1", {id: "head"}, "Hello World from React.....!!!!");
let container = ReactDOM.createRoot(document.getElementById("container"));
// container.render(heading);

let parent = React.createElement("div", 
{id: "parent"}, 
[React.createElement("div",
{id: "child"},[React.createElement("h1", {},"Hello I am a Heading under Children"),
React.createElement("h2", {},"Hello I am a sibling")]
), React.createElement("div",
{id: "child"},[React.createElement("h1", {},"Hello I am a Heading under Children"),
React.createElement("h2", {},"Hello I am a sibling")]
)]
);

container.render(parent);

