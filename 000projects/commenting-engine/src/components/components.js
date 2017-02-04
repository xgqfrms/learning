// import ???;

import React from 'react';



class StoryBox extends React.Component {
    //constructor
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
// defualt props ??? 

export default StoryBox;
