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


*/

class StoryBox extends React.Component {
    // ES6 constructor (no getInitialState: function )
    // ES6 constructor (no getDefaultProps: function)
    render() {
        return (
            <div>
                <h1> Story Box </h1>
                <mark> JSX.js </mark>
            </div>
        );
    }
}

ReactDOM.render(
    <StoryBox />,
    document.getElementById('story-app')
);

StoryBox.defaultProps = {};

// export default StoryBox;
