// import ???;

import React from 'react';

// import ReactDOM from 'react-dom';


class StoryBox extends React.Component {
    // ES6 constructor (no getInitialState: function )
    // ES6 constructor (no getDefaultProps: function)
    render() {
        return( <div>Story Box</div> );
    }
}

ReactDOM.render(
    <StoryBox />,
    document.getElementById('story-app')
);


// export ???;

StoryBox.defaultProps = {};
// ES6 constructor (defaultProps)

export default StoryBox;
