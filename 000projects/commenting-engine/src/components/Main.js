require('normalize.css/normalize.css');
require('styles/App.css');

// just require css ??? not need let variable

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let loader3 = require('../images/loader3.gif');

// just require img & need let variable

/*

<img src="https://uploads.disquscdn.com/images/ddd855ca22234bc99e00848937e67ac63989ba073df6a93345dffbeadc47bc60.png" alt="ng2 bible"/>
<img src="https://uploads.disquscdn.com/images/de7cf0975e3eaa7820472b4a2ae9eb512e51a35769d6f70d6126e08b63640f93.png" alt="webview"/>

*/

class AppComponent extends React.Component {
    render() {
        return (
            <div className = "index">
                <img src = { yeomanImage } alt = "Yeoman Generator" />
                <div className = "notice">
                    Please edit 
                    <code> src/component/Main.js </code>
                    to get started!
                </div>
                <section>
                    <h1> hello es6 </h1>
                    <div className = "notice">
                        <img src = { loader3 }alt = "loader" />
                        <div>
                            <p> Good Morning </p>
                            <p> 10: 55 AM </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


AppComponent.defaultProps = {};

export default AppComponent;
