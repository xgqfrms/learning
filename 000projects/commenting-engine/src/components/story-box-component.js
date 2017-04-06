// StoryBox component

// stateless component

/*
let StoryBox = React.creatClass({
    render: function(){
        return (
            <section>
            </section>
            //{StoryBox comment}
        );
    }
});
*/

import React, { Component } from 'react'

class StoryBox extends React.Component {
    render(){
        return (
            <section>
                {/*StoryBox comment*/}
            </section>
        );
    }
};


// export.module = StoryBox;

StoryBox.defaultProps = {};

export default StoryBox;

