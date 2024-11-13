{/* <div id=""parent>
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}


//parent is just an object which is a react element which becomes HTMl which the browser can understand
const parent = React.createElement(
    'div', {id : 'parent'},
    /*children of div id parent*/ [React.createElement( //array of children of div tags which are siblings
                                            'div', {id : 'child1'}, 
                                            [React.createElement('h1', {}, "I am an h1 tag"), React.createElement('h2', {}, "I am an h2 tag")] //array of children to create siblings
                                        ), React.createElement(
                                            'div', {id : 'child2'}, 
                                            [React.createElement('h1', {}, "I am an h1 tag"), React.createElement('h2', {}, "I am an h2 tag")]
                                        )]
                                    ); //nested elements


// const heading = React.createElement(
//     'h1', 
//     {id : 'heading'}, 
//     'Hello World from React'); //3 arguments -> tag, object(place where we give attributes to tags), content

console.log(parent); //react element object, also has props(children)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
// this is so complicated and coding becomes tedious hence the need of jsx

//JSX