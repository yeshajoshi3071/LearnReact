const heading = React.createElement(
    'h1', 
    {id : 'heading'}, 
    'Hello World from React'); //3 arguments -> tag, object(place where we give attributes to tags), content

console.log(heading); //react element object, also has props(children)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);