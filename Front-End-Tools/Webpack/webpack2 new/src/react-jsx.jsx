import React from 'react';

import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        {/**/}
    };
}

export class app extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (<div></div>);
    }
}

export default connect(
    mapStateToProps,
    // Implement map dispatch to props
)(app);


const func_hello = () => {
    console.log(`hello, webpack 2!`);
};


export func_hello;



{/*

rrc

*/}








