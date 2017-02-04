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



now.toLocaleDateString();
"2017/2/5"

now.toLocaleString();
"2017/2/5 上午1:51:44"

now.toLocaleTimeString();
"上午1:51:44"


now.getHours();
1

now.getMinutes();
51

now.getSeconds();
44

// G:\wwwRoot\learning\Front-End\React\React\components

function tick() {
    const localTime = new Date().toLocaleTimeString();
    console.log(`localTime = ${localTime}`);
    let clock = document.getElementById("clock");
    clock.innerHTML=`localTime = ${localTime}`;
}

setInterval(tick, 1000);



// function name() Error
setInterval(getTime(), 1000);

// function name OK
let time = setInterval(getTime, 1000);


*/

class StoryBox extends React.Component {
    // ES6 constructor (no getInitialState: function )
    // ES6 constructor (no getDefaultProps: function)
    render() {
        let getTime = function (){
            const now = new Date();
            now.toLocaleString();
            console.log(now.toLocaleString());
            // let clock = document.getElementById("clock");
            // clock.innerHTML=`localTime = ${localTime}`;
        };
        // setInterval(getTime(), 1000);
        let time = setInterval(getTime, 1000);
        return (
            <div>
                <h1> Story Box </h1>
                <mark> JSX.jsx </mark>
                <p className="lead">
                    {/*Current time: {now.toLocaleTimeString()}*/}
                    Current time: { time }
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
