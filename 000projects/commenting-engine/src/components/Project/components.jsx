// import ???;

//import React from 'react';

// import ReactDOM from 'react-dom';



/*
// export ???;
// ES6 constructor (defaultProps)

export xxx ? export default StoryBox : export StoryBox


export default StoryBox;

// have multi components, setting main/defualt Component


export StoryBox; === export default StoryBox;

// only one component, setting main Component


//export default StoryBox;
//export StoryBox;


root/parent component export error ???


children component export OK ???

// Date.toXXXString()

Locale OK:

now.toLocaleTimeString()

Local Error:

now.toLocalTimeString()

*/

class StoryBox extends React.Component {
    // ES6 constructor (no getInitialState: function )
    // ES6 constructor (no getDefaultProps: function)
    render() {
        const now = new Date();
        return (
            <div>
                <h1> Story Box </h1>
                <mark> JSX.jsx </mark>
                <p className="lead">
                    Current time: {now.toLocaleTimeString()}

                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <StoryBox />,
    document.getElementById('story-app')
);

StoryBox.defaultProps = {};

//export default StoryBox;
//export StoryBox;
